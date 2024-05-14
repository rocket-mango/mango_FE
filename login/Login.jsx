import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleUsernameChange = (text) => setUsername(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://10.240.151.5:8080/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

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
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image source={require("../assets/망하지망고.png")} />
        <Text
          style={{
            marginTop: 15,
            marginBottom: 50,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          실패 없는 망고 재배를 위한 질병 진단 서비스!
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="아이디를 입력해주세요"
          onChangeText={handleUsernameChange}
        />
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요"
          onChangeText={handlePasswordChange}
        />
      </View>

      <View style={{ flexDirection: "row-reverse" }}>
        <Text>비밀번호 찾기</Text>
        <View style={{ width: 10 }} />
        <Text>아이디 찾기</Text>
      </View>

      <View style={{ height: 30 }} />
      {/*로그인 실패 시 (isLogin이 false이면) 문구가 뜨도록 */}
      {!isLogin && (
        <Text style={{ color: "red", fontSize: 13, textAlign: "center" }}>
          로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.
        </Text>
      )}

      <View style={styles.button}>
        <Button title="로그인" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" },
  screen: {
    margin: 40,
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    //height: 50,
    marginTop: 15,
    justifyContent: "center",
    //backgroundColor: "#FECA1A",
    ...Platform.select({
      ios: {
        shadowColor: "#FECA1A",
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
  textInput: {
    width: "100%",
    height: 50,
    marginBottom: 5,
    justifyContent: "center",
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "gray",
  },
});
