import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';

const App = () => {
  // const handleLogout = () => {
  //   fetch('/api/user/logout', {
  //     method: 'POST'
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       // 로그아웃 성공 시 처리할 작업 추가
  //       console.log('로그아웃 성공');
  //     } else {
  //       // 로그아웃 실패 시 처리할 작업 추가
  //       console.log('로그아웃 실패');
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>로그아웃</Text>
      <Text style={styles.boldLargeText}>로그아웃이 완료되었습니다.</Text>
      <Image
        source={require("../assets/check.png")}
        style={styles.check}
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.greenButton}>
          <Text style={styles.buttonText}>로그인 하기</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#F5F5F5'

  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    color: 'black'
  },
  boldLargeText: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
  },
  buttonContainer: {
    flexDirection: 'column',
    marginBottom: 30,
    alignItems: 'center',
  },
  greenButton: {
    backgroundColor: '#228B22',
    padding: 10,
    width: 300,  // 너비 증가
    alignItems: 'center',
    borderRadius: 5,
  },
  check:{
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginBottom: 150,
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default App;
