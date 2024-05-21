import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';

const UserInfoScreen = () => {
  const [name, setName] = useState('yujin');
  const [nickname, setNickname] = useState('yujin');
  const [username, setUsername] = useState('yujin');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('************');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = () => {
    if (!email.includes('@')) {
      Alert.alert("유효하지 않은 이메일", "올바른 이메일 주소를 입력해주세요.");
      return;
    }
    setIsLoading(true);

    fetch('http://13.125.0.58:8080/api/user/modify', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        nickname,
        username,
        email,
        password
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다. 상태 코드: '+response.status);
      }
      return response.json();
    })
    .then(data => {
      setIsLoading(false);
      if (data.error) {
        Alert.alert("업데이트 실패", data.message);
      } else {
        Alert.alert("업데이트 성공", "정보가 성공적으로 업데이트 되었습니다.");
        console.log(data);
      }
    })
    .catch(error => {
      setIsLoading(false);
      console.error("업데이트 실패", error);
      Alert.alert("업데이트 실패", "정보 업데이트 중 오류가 발생했습니다. 오류: " + error.message);
    });
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
