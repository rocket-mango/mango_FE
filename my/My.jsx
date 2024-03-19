import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  // 상태 관리를 위한 useState 훅 사용
  const [userData, setUserData] = useState({
    name: 'hello',
    nickname: 'hello',
    username: 'hello',
    password: 'skjgf7733&',
    email: 'salkjf@aldkfj.com',
  });

  // 컴포넌트가 마운트될 때 사용자 정보를 가져오는 useEffect 훅 사용
  useEffect(() => {
    fetchUserData();
  }, []);

  // 사용자 정보를 가져오는 함수
  const fetchUserData = async () => {
    // //FormData 인스턴스 생성
    // const formData=new FormData();
    // formData.append('name', 'hello');
    // formData.append('nickname', 'yoonji');
    // formData.append('username', 'yoonji');
    // formData.append('password', 'skjgf7733&');
    // formData.append('email', 'salkjf@aldkfj.com');

    try {
      const response = await fetch('http://10.240.104.88:8080/api/user/information', {
        method: 'GET',
        // 필요한 경우 헤더 추가
        headers: {
          //'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiWW9vbmppQ2hvaSIsInVzZXJuYW1lIjoiQ2hvaSIsIm5pY2tuYW1lIjoiQ2hvaSIsImVtYWlsIjoiZGtxa2VrZjQyQG5hdmVyLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTA0OTIwNDksImV4cCI6MTcxMDQ5NTY0OX0.jWsMa_O_ZwjB26T6AQCYnjMGvsQjJxZVIzJmLbgkjtY', // 인증이 필요한 경우
        },
        //body: formData, //FormData 인스턴스를 요청 본문에 설정
      });
      const data = await response.json();
      setUserData({
        name: data.name,
        nickname: data.nickname,
        password: data.password,
        username: data.username,
        email: data.email,
      });
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>이름</Text>
      <Text style={styles.value}>{userData.name}</Text>

      <Text style={styles.label}>닉네임</Text>
      <Text style={styles.value}>{userData.nickname}</Text>

      <Text style={styles.label}>ID</Text>
      <Text style={styles.value}>{userData.username}</Text>

      <Text style={styles.label}>이메일</Text>
      <Text style={styles.value}>{userData.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default App;
