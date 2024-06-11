import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  TextInput,
  Alert,
  ActivityIndicator
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { REACT_APP_BACKEND_URL } from '@env';

export default function Test() {
  const navigation = useNavigation();
  const [selectImage, setSelectImage] = useState("");
  const [location, setLocation] = useState("");  
  const [token, setToken] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); //TODO: 로딩 화면

  // 권한
  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("카메라 사용 가능");
        return true;
      } else {
        console.log("카메라 권한 거부");
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  }

  // 카메라 이미지
  const pickCameraImage = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert("권한 필요", "진단 기능을 사용하기 위해서는 카메라 및 저장소 권한이 필요합니다");
      return;
    }

    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('카메라 사용 취소');
      } else if (response.errorCode) {
        console.log('카메라 에러: ', response.errorCode, response.errorMessage, response);
      } else {
        setSelectImage(response.assets[0].uri);
      }
    });
  };

  // 갤러리 이미지
  const pickGalleryImage = async () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('갤러리 사용 취소');
      } else if (response.errorCode) {
        console.log('갤러리 에러: ', response.errorMessage);
      } else {
        setSelectImage(response.assets[0].uri);
      }
    });
  };

  // 토큰 저장
  const saveToken = async (newToken) => {
    try {
      await AsyncStorage.setItem("token", newToken);
      console.log("Token saved: ", newToken);
    } catch (error) {
      console.error("토큰 저장 오류:", error);
    }
  };

  // 토큰 불러오기
  const getToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem("token");
      console.log("Fetched token from storage: ", storedToken); // 토큰 확인
      if (!storedToken) {
        throw new Error("토큰이 없습니다.");
      }
      setToken(storedToken);
      return storedToken;
    } catch (error) {
      console.error("토큰 가져오기 오류:", error);
      return null;
    }
  };
  
  useEffect(() => {
    getToken();
  }, []);
    
  
// 백엔드 서버에 이미지 업로드
const handleUpload = async () => {
  if (!selectImage || !location) {
    Alert.alert("오류", "이미지와 위치 정보를 모두 입력해주세요.");
    return;
  }

  const currentToken = await getToken();
  if (!currentToken) {
    Alert.alert("오류", "다시 로그인 해주세요.");
    return;
  }

  console.log("사용중인 토큰: ", currentToken); // 사용 중인 토큰 확인
  
  if (!currentToken.includes('.')) { // 토큰 형식 확인
    Alert.alert("오류", "토큰 형식이 잘못되었습니다.");
    return;
  }

  try {
    setIsLoading(true); //TODO: 로딩 화면 표시

    const formData = new FormData();
    formData.append("mangoImage", {
      uri: selectImage,
      type: "image/png",
      name: "upload.png",
    });
    formData.append("location", location);

    const response = await axios.post(`https://api.capston-test-mm.p-e.kr/api/disease/diagnosis`, formData, {
      formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi7KCV7Jyg7KeEIiwidXNlcm5hbWUiOiJ5dWppbjAwIiwibmlja25hbWUiOiJ5dWppbmFsaWNlIiwiZW1haWwiOiJ3amRkYndsc0Bld2hhaW4ubmV0Iiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxNzU4MjAzOCwiZXhwIjoxNzE3NTg1NjM4fQ.bgGQNetcrxC-M11gcrXK4QtswJADF5RXC7MhaS43ZwA`,
      },
    });

    const data=response.data;
    const result = {
      diseaseResult: {
        is_disease: data.mango.is_disease,
        img_url: data.mango.img_url,
      },
      uploadInfo: {
        location: data.mango.location,
        date: data.mango.createdDate,
      },
      top3List: data.top3List,
      diseaseInfo: {
        description: data.disease.symptom,
        cause: data.disease.reason,
        handle: data.disease.handle,
      },
    };
    //TODO: 검사 결과 Result 화면으로 전달
    setIsLoading(false);
    navigation.navigate("진단 결과", { result });

    console.log('업로드 성공:', response.data);
    navigation.navigate("진단 결과", {
      img_url: selectImage,
      location: location,
    });
  } catch (error) {
    if (error.response && error.response.data && error.response.data["JWT Error"] && error.response.data["JWT Error"].includes("expired")) {
      Alert.alert("오류", "토큰이 만료되었습니다. 다시 로그인 해주세요.");
      //navigation.navigate("Login"); // 로그인 페이지로 이동
    } else {
      console.error('업로드 에러:', error.response ? error.response.data : error.message);
      Alert.alert("업로드 실패", "이미지 업로드에 실패했습니다.");
      setIsLoading(false); //TODO: 로딩 화면 없애기
    }
  }
  
}; 
if (isLoading) {
  return (
    <View
      style={[
        styles.screenContainer,
        styles.alginCenterContainer,
        styles.justifyCenterContainer,
      ]}
    >
      <Image
        style={{ marginBottom: 5 }}
        source={require("../assets/protagonist_mango.png")}
      />
      <Text style={styles.title}>오늘의 망고 TMI</Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "#606060",
        }}
      >
        망고의 생육적정온도는{"\n"}24~27℃입니다.
      </Text>
      <View style={styles.space} />
      <ActivityIndicator size="large" color="#FE9821" />
      <View style={{ height: 25 }} />
      <Text style={{ color: "#606060" }}>진단 중입니다...</Text>
    </View>
  );
}

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screen}>
        <View>
          {selectImage ? (
            <Image style={styles.uploadImg} source={{ uri: selectImage }} />
          ) : (
            <View
              style={[
                styles.uploadImg,
                {
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ccc",
                },
              ]}
            >
              <Text style={{ color: "#606060" }}>
                망고 잎 사진을 업로드해주세요.
              </Text>
            </View>
          )}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: "47.5%",
              borderWidth: 1,
              borderRadius: 10,
              flexDirection:"row"
            }}
            onPress={pickCameraImage}
          >
            <Image source={require("../assets/camera.png")} style={{width:24, height:24, marginRight:8}}/>
            <Text>카메라</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: "47.5%",
              borderWidth: 1,
              borderRadius: 10,
              flexDirection:"row"
            }}
            onPress={pickGalleryImage}
          >
            <Image source={require("../assets/galary.png")} style={{width:24, height:24, marginRight:8}}/>
            <Text>갤러리</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.space} />

        <Text style={{ color: "#606060", textAlign:"center", marginBottom:10 }}>
          진단 기록에서 구분할 수 있도록 구역을 남겨놓으세요!
        </Text>
        <View style={{ flexDirection: "row", width: "100%", borderWidth: 1, borderRadius:8, borderColor:"gray", alignItems:"center", paddingHorizontal:18 }}>
          <TextInput style={{  flex: 1, height: 50 }} 
          value={location}
          onChangeText={setLocation}
          placeholder="망고 구역을 입력해주세요"
          />
          <Text>구역</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleUpload}
        >
          <Text style={styles.buttonText}>진단하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" }, //ScrollView
  screen: {
    marginHorizontal: 24,
    marginTop: 40,
  },
  screenBottom: {
    marginBottom: 36,
  },

  space: { marginBottom: 36 },

  alginCenterContainer: { alignItems: "center" },
  justifyCenterContainer: { justifyContent: "center" },

  uploadImg: { aspectRatio: 1, width: "100%", marginBottom: 16 },

  title: { fontSize: 20, fontWeight: "bold" },
  button: {
    width: "100%",
    height: 50,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FECA1A",
    ...Platform.select({
      ios: {
        shadowColor: "rgb(0,0,0)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3, // TODO: 안드로이드 버튼 그림자 수정
      },
    }),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  imgButton: { width: 25, height: 25 },

  //구역 입력
  container: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#787878",
  },
  input: {
    padding: 8,
    fontSize: 16,
  },
  searchButton: {
    width: 24,
    height: 24,
  },
});