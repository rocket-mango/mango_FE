import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';

const UserInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userInfo } = route.params;

  const [name, setName] = useState(userInfo.name);
  const [nickname, setNickname] = useState(userInfo.nickname);
  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async () => {
    if (!email.includes('@')) {
      Alert.alert("유효하지 않은 이메일", "올바른 이메일 주소를 입력해주세요.");
      return;
    }
    setIsLoading(true);
    try {
      // 수정된 사용자 정보 저장
      const updatedUserInfo = {
        name,
        nickname,
        username,
        email,
        password,
      };

      // AsyncStorage에 저장
      await AsyncStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

      Alert.alert("수정되었습니다");
      navigation.goBack();
    } catch (error) {
      console.error("오류: ", error);
      Alert.alert("수정 오류", "알 수 없는 오류가 발생했습니다.");
    }
    setIsLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>회원 정보 수정</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>이름</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>닉네임</Text>
            <TextInput
              style={styles.input}
              value={nickname}
              onChangeText={setNickname}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>ID</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>비밀번호</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>이메일</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>수정 완료</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 60,
    color: 'black'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  label: {
    color: 'black',
    width: 80,
    marginLeft: 20,
    fontSize: 17,
    fontWeight: 'bold'
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    padding: 10,
    backgroundColor: '#F5F5F5',
    marginLeft: 10,
    marginRight: 20,
    height: 40,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#AFD803',
    padding: 11,
    alignItems: 'center',
    marginHorizontal: 40,
    borderRadius: 5,
    marginTop: 50,
    height: 45
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserInfoScreen;
