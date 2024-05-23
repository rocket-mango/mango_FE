import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';

const App = () => {
  // const handleWithdrawal = () => {
  //   fetch('/api/user/resignation', {
  //     //method: '',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     Alert.alert('탈퇴 완료', `닉네임 ${data.nickname}으로 탈퇴 처리되었습니다.`);
  //   })
  //   .catch(error => {
  //     Alert.alert('오류 발생', '탈퇴 처리 중 오류가 발생했습니다.');
  //     console.error('탈퇴 처리 중 오류:', error);
  //   });
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.boldLargeText}>탈퇴가 완료되었습니다.</Text>
      <Image
        source={require("../assets/check.png")}
        style={styles.check}
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.greenButton}>
          <Text style={styles.buttonText}>회원 가입하기</Text>
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
    backgroundColor: '#AFD803',
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
