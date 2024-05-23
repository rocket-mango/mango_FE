// Test.jsx
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Test() {
  const navigation = useNavigation();
  const [selectImage, setSelectImage] = useState("");
  const [location, setLocation] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem("token");
        if (userToken !== null) {
          console.log("Token:", userToken);
          setToken(userToken);
        } else {
          console.log("No token found");
        }
      } catch (error) {
        console.log("Token retrieval failed:", error);
      }
    };

    getToken();
  }, []);

  const requestPermissions = async () => {
    try {
      const permissions = [
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ];

      const granted = await PermissionsAndroid.requestMultiple(permissions);

      if (
        granted["android.permission.READ_EXTERNAL_STORAGE"] === PermissionsAndroid.RESULTS.GRANTED &&
        granted["android.permission.CAMERA"] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log("Storage and Camera permissions granted");
        return true;
      } else {
        console.log("Permissions denied - using default settings for testing");
        return true;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const ImagePicker = async (source) => {
    const hasPermissions = await requestPermissions();
    if (!hasPermissions) return;

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

    if (source === "camera") {
      launchCamera(options, handleResponse);
    } else if (source === "gallery") {
      launchImageLibrary(options, handleResponse);
    }
  };

  const handleUpload = () => {
    if (selectImage && location) {
      navigation.navigate("결과", {  // "Result"를 사용합니다
        img_url: selectImage,
        location: location,
      });
    } else {
      Alert.alert("Error", "구역을 입력해주세요!");
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
              <Text style={{ color: "#606060" }}>망고 잎 사진을 업로드해주세요.</Text>
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
              ImagePicker("camera");
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
              ImagePicker("gallery");
            }}
          >
            <Text>갤러리</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.space} />

        <Text style={{ color: "#606060" }}>
          나중에 진단 기록에서 망고를 구분할 수 있도록 망고의 구역 정보를 남겨놓으세요!
        </Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <TextInput
            style={{ borderWidth: 1, flex: 1, height: 50 }}
            onChangeText={setLocation}
            value={location}
          />
          <Text>구역</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonText}>진단하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" },
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
        elevation: 3,
      },
    }),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  imgButton: { width: 25, height: 25 },
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
