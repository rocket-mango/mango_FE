import React, { useState } from "react";
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
  Linking,
} from "react-native";
import { useEffect } from 'react';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
//import { AsyncStorage } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
//import { Alert } from 'react-native';


export default function Test() {
  const navigation = useNavigation();

  const requestPermissions = async () => {
    try {
      const permissions = [
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ];
  
      const granted = await PermissionsAndroid.requestMultiple(permissions);

      if (granted["android.permission.READ_EXTERNAL_STORAGE"] === PermissionsAndroid.RESULTS.GRANTED &&
          granted["android.permission.CAMERA"] === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Storage and Camera permissions granted");
          return true;
      } else {
          console.log("Permissions denied - using default settings for testing");
          return true;  // 테스트를 위해 일시적으로 권한 거부를 무시
      }
      
    } catch (err) {
      console.warn(err);
      return false;  // 예외 발생 시 false 반환
    }
  };
  
  const [selectImage, setSelectImage] = useState("");
  const [location, setLocation] = useState("");
  const [token, setToken] = useState("");

  // 토큰 설정 로직 확인
useEffect(() => {
  const getToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem("token");
      if (userToken !== null) {
        console.log("Token:", userToken); // 로그를 통해 토큰 출력 확인
        setToken(userToken);
      } else {
        console.log("No token found"); // 토큰이 없는 경우 로그 출력
      }
    } catch (error) {
      console.log("Token retrieval failed:", error);
    }
  };

  getToken();
}, []);


  const ImagePicker = async (source) => {
    const hasPermissions = await requestPermissions();
    if (!hasPermissions) return;  // 권한이 없으면 함수 종료
  
    let options = {
      mediaType: "photo",
      quality: 1,
      storageOptions: {
        path: "images",
        skipBackup: true,
      },
    };
  
    const handleResponse = (fetchResponse) => {
      if (fetchResponse.didCancel) {
        console.log("User cancelled image picker");
      } else if (fetchResponse.errorCode) {
        console.log("ImagePicker Error:", fetchResponse.errorMessage);
      } else {
        setSelectImage(fetchResponse.assets[0].uri);
        console.log(fetchResponse.assets[0].uri);
      }
    };

    // const handleUpload = () => {
    //   if (selectImage) {
    //     uploadImage(selectImage);
    //   } else {
    //     Alert.alert("Upload Error", "No image selected. Please select an image first.");
    //   }
    // };
    
    
  
    if (source === "camera") {
      launchCamera(options, handleResponse);
    } else if (source === "gallery") {
      launchImageLibrary(options, handleResponse);
    }
  };
  

  const uploadImage = async (imageUri) => {
    try {
      // const response=await fetch(imageUri);
      // const blob=await response.blob();

      const formData = new FormData();
      formData.append("mangoImage", {
        uri: imageUri,
        name: "image.png",
        type: "image/png",
      });
      formData.append("location", location);
  
      const fetchResponse = await fetch(
        "http://43.200.174.193:8080/api/disease/diagnosis",
        {
          method: "POST",
          body: formData,
          headers: {
            //"Content-Type": "multipart/form-data", //자동으로 설정됨
            "Authorization": `Bearer ${token}`
        }
        }
      );
  
      if (!fetchResponse.ok) {
        throw new Error(`Failed to upload image, status ${fetchResponse.status}`);
      }
  
      const data = await fetchResponse.json();
      console.log("Image upload response:", data);
      Alert.alert("Upload Success", "Image has been successfully uploaded.");
    } catch (err) {
      console.warn("Upload Error:", err);
      Alert.alert("Upload Error", `Failed to upload image. Please try again. Error: ${err}`);
    }
  };

  const handleUpload = () => {
    if (selectImage) {
      uploadImage(selectImage);
    } else {
      Alert.alert("Upload Error", "No image selected. Please select an image first.");
    }
  };
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
            onPress={() => {
              ImagePicker("camera"); // 카메라 소스 선택
            }}
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
            onPress={() => {
              ImagePicker("gallery"); // 갤러리 소스 선택
            }}
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
          //onPress={() => navigation.navigate("진단 결과")}
          onPress={handleUpload}  // '진단하기' 버튼을 누를 때 업로드 실행
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