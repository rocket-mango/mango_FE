import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const handleWithdrawal = () => {
    fetch('/api/user/resignation', {
      //method: '',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      Alert.alert('탈퇴 완료', `닉네임 ${data.nickname}으로 탈퇴 처리되었습니다.`);
    })
    .catch(error => {
      Alert.alert('오류 발생', '탈퇴 처리 중 오류가 발생했습니다.');
      console.error('탈퇴 처리 중 오류:', error);
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>회원 탈퇴</Text>
      <Text style={styles.boldLargeText}>탈퇴 유의사항을 확인해주세요.</Text>
      <Text style={styles.description}>
        탈퇴 후에는 과거의 망고 질병 진단 기록을 확인할 수 없습니다.{'\n'}{'\n'}
        탈퇴 후에는 이메일, 이름, 아이디 등 개인 정보가 망하지망고 서버에서 완전히 삭제됩니다.{'\n'}{'\n'}
        단, 업로드한 망고 이미지는 망고 질병 식별 신뢰도 향상을 위해 서버에 보관됩니다.{'\n'}{'\n'}
        탈퇴 후 다시 망하지망고 서비스를 이용하고 싶으신 경우 회원가입을 진행해주셔야 합니다.
      </Text>
      <Text style={styles.boldLargeText}>정말 탈퇴하시겠습니까?</Text>
      <Image
        source={require("../assets/sadMango.png")}
        style={styles.sadMango}
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.greenButton} onPress={handleWithdrawal}>
          <Text style={styles.buttonText}>탈퇴 취소하기</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity style={styles.whiteButton} onPress={handleWithdrawal}>
          <Text style={styles.buttonText}>회원 탈퇴하기</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'black'
  },
  boldLargeText: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
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
  whiteButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    width: 300,  // 너비 증가
    alignItems: 'center',
    borderRadius: 5,
  },
  sadMango:{
    width: 160,
    height: 160,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  space:{
    height: 10,
  }
});

export default App;
