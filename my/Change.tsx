import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const UserInfoScreen = () => {
  const [name, setName] = useState('yujin');
  const [nickname, setNickname] = useState('yujin');
  const [username, setUsername] = useState('yujin');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('************');

  // API 호출 함수
  const handleUpdate = () => {
    fetch('/api/user/modify', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        username,
        nickname,
        email
      }),
    })
    .then(response => response.json())
    .then(data => {
      Alert.alert("업데이트 성공", "정보가 성공적으로 업데이트 되었습니다.");
      console.log(data); // 수정된 사용자 정보 로깅
    })
    .catch(error => {
      console.error("업데이트 실패", error);
      Alert.alert("업데이트 실패", "정보 업데이트 중 오류가 발생했습니다.");
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>회원 정보 수정</Text>
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
          secureTextEntry={true} // 비밀번호 숨김 처리
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
    flexDirection: 'row', // 요소들을 행으로 정렬
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  label: {
    color: 'black',
    width: 80, // 레이블의 너비 고정
    marginLeft: 20,
    fontSize: 17,
    fontWeight: 'bold'

  },
  input: {
    flex: 1, // 남은 공간을 모두 채움
    fontSize: 16,
    color: 'black',
    padding: 10,
    backgroundColor: '#F5F5F5',
    marginLeft: 10, // 레이블과의 간격
    marginRight: 20,
    height: 40,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#228B22',
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
