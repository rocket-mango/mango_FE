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

  // 토큰
  useEffect(()=>{
    const getToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("토큰이 없습니다.");
      }
    }
    
    getToken();
  }, [])
  
// 백엔드 서버에 이미지 업로드
const handleUpload = async () => {
  if (selectImage && location) {
    navigation.navigate("결과", {
      img_url: selectImage,
      location: location,
    });

    try {
      const formData = new FormData();
      formData.append("mangoImage", {
        uri: selectImage, // 이미지 경로는 selectImage에서 가져옴
        type: "image/png", // MIME 타입을 image/jpeg으로 변경하거나 이미지에 맞게 조정
        name: "upload.png", // 파일명 변경 가능
      });
      formData.append("location",location);
      const response = await axios.post(
        `https://api.capston-test-mm.p-e.kr/api/disease/diagnosis`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            //"Authorization": $(token),
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi7KCV7Jyg7KeEIiwidXNlcm5hbWUiOiJ5dWppbjAwIiwibmlja25hbWUiOiJ5dWppbmFsaWNlIiwiZW1haWwiOiJ3amRkYndsc0Bld2hhaW4ubmV0Iiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxNzEzMjY5NywiZXhwIjoxNzE3MTM2Mjk3fQ.yOUDS3RP6T98gBNxzkiRhAxYSKLh3niYnBWDpe96fd4"
          },
        }
      );

      // 업로드 성공
      console.log('업로드 성공:', response.data);
      Alert.alert("Upload Success", "Image uploaded successfully!");
    } catch (error) {
      // 업로드 실패
      console.error('업로드 에러:', error);
      Alert.alert("업로드 에러", "이미지 업로드에 실패했습니다.");
    }
  }
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
            }}
            onPress={pickCameraImage}
          >
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
            }}
            onPress={pickGalleryImage}
          >
            <Text>갤러리</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.space} />

        <Text style={{ color: "#606060" }}>
          나중에 진단 기록에서 망고를 구분할 수 있도록 망고의 구역 정보를
          남겨놓으세요!
        </Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <TextInput style={{ borderWidth: 1, flex: 1, height: 50 }} />
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