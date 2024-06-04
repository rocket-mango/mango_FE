import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_BACKEND_URL } from '@env';

export default function Login() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleUsernameChange = (text) => setUsername(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleLogin = async () => {
    try {
      console.log(`Backend URL: ${REACT_APP_BACKEND_URL}`);
      const response = await fetch(`${REACT_APP_BACKEND_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // 로그인 성공
        //const data = await response.json();
        const token = response.headers.get("Authorization");

        if (token) {
          // 토큰 저장
          await AsyncStorage.setItem("token", token);
          navigation.navigate("앱 화면");
        } else {
          throw new Error("토큰이 없음");
        }
      } else {
        // 로그인 실패
        setIsLogin(false);
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      Alert.alert("로그인에 실패했습니다. 네트워크 연결을 확인해주세요.");
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.screen}>
        <View style={styles.container}>
          <Image source={require("../assets/망하지망고.png")} />
          <Text
            style={{
              marginTop: 24,
              marginBottom: 48,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            실패 없는 재배를 위한,{"\n"}망고 질병 진단 서비스!
          </Text>

          <TextInput
            style={styles.textInput}
            placeholder="아이디를 입력해주세요"
            onChangeText={handleUsernameChange}
          />
          <TextInput
            style={[styles.textInput, { marginBottom: 0 }]}
            placeholder="비밀번호를 입력해주세요"
            onChangeText={handlePasswordChange}
          />
        </View>

        <View style={{ flexDirection: "row-reverse", marginBottom: 14 }}>
          <Text style={{ fontSize: 14 }}>비밀번호 찾기</Text>
          <View style={{ width: 18 }} />
          <Text style={{ fontSize: 14 }}>아이디 찾기</Text>
        </View>

        <View style={{ height: 30 }} />
        {/*로그인 실패 시 (isLogin이 false이면) 문구가 뜨도록 */}
        {!isLogin && (
          <Text
            style={{
              color: "red",
              fontSize: 13,
              textAlign: "center",
              marginBottom: 14,
            }}
          >
            로그인에 실패. 아이디와 비밀번호를 확인해주세요.
          </Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderWidth: 1.5,
              borderColor: "#03CF5D",
              backgroundColor: "white",
            },
          ]}
        >
          <Text style={styles.buttonText}>네이버로 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center", marginTop: 6 }}
          onPress={() => navigation.navigate("회원가입")}
        >
          <Text style={{ fontSize: 14, color: "#686868", fontWeight: "600" }}>
            회원가입하기 →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  screen: {
    marginHorizontal: 40,
  },
  container: {
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    borderRadius: 10,
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
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textInput: {
    width: "100%",
    height: 50,
    marginBottom: 10,
    paddingLeft: 18,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
  },
});
