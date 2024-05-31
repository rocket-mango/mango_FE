import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
// 로고 이미지
//const logoImage: ImageSourcePropType = require('./path-to-your-logo.png'); // 로컬 이미지 사용 예시

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/망하지망고.png")} // 로고 이미지 설정
        style={styles.logo}
      />

      <View style={styles.inputGroup}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="이메일을 입력해주세요."
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>닉네임</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNickname}
          value={nickname}
          placeholder="닉네임을 입력해주세요."
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>이름</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="이름을 입력해주세요."
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>아이디</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="아이디를 입력해주세요."
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="비밀번호를 입력해주세요."
          secureTextEntry // 비밀번호 숨김 처리
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("로그인")}
      >
        <Text style={styles.buttonText}>회원가입 완료하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 118,
    height: 26.54,
    marginBottom: 32,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "grey",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#FECA1A",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
