import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function Test() {
  const navigation = useNavigation();

  const requestPermissions = async () => {
    try {
      const permissions = [
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ];

      const granted = await PermissionsAndroid.requestMultiple(permissions, {
        title: "Permission Request",
        message:
          "This app needs access to your storage and camera to upload images.",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      });

      if (
        granted["android.permission.READ_EXTERNAL_STORAGE"] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.CAMERA"] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log("Storage and Camera permissions granted");
      } else {
        console.log("Permissions denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const [selectImage, setSelectImage] = useState("");

  const ImagePicker = (source) => {
    requestPermissions().then(() => {
      let options = {
        mediaType: "photo",
        quality: 1,
        storageOptions: {
          path: "image",
        },
      };

      if (source === "camera") {
        launchCamera(options, handleResponse);
      } else if (source === "gallery") {
        launchImageLibrary(options, handleResponse);
      }
    });
  };

  const uploadImage = async (imageUri) => {
    try {
      const formData = new FormData();
      formData.append("image", {
        uri: imageUri,
        name: "image.jpg",
        type: "image/jpeg",
      });

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/disease/diagnosis`,
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = await response.json();
      console.log("Image upload response:", data);
    } catch (err) {
      console.warn(err);
    }
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.errorCode) {
      console.log("ImagePicker Error:", response.errorMessage);
    } else {
      setSelectImage(response.assets[0].uri);
      console.log(response.assets[0].uri);
      uploadImage(response.assets[0].uri);
    }
  };

  return (
    <View style={[styles.screenContainer, styles.justifyCenterContainer]}>
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
              <Text style={{ color: "#606060" }}>사진을 업로드해주세요.</Text>
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
          onPress={() => navigation.navigate("진단 결과")}
        >
          <Text style={styles.buttonText}>진단하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  screen: {
    marginHorizontal: 40,
  },

  space: { marginBottom: 45 },

  alginCenterContainer: { alignItems: "center" },
  justifyCenterContainer: { justifyContent: "center" },

  uploadImg: { aspectRatio: 1, width: "100%", marginBottom: 25 },

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

  listBox: {
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 6,
    backgroundColor: "#F8F8F8",
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  weatherText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#676767",
    marginBottom: 8,
  },
});
