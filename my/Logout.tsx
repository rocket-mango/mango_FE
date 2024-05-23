import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

const Logout = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleLogout = () => {
    navigation.navigate('RealLogout'); // 'RealLogout'을 적절한 네비게이션 타겟으로 수정합니다.
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.boldLargeText}>로그아웃 하시겠습니까?</Text>
      <Image
        source={require("../assets/sadMango.png")}
        style={styles.sadMango}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.greenButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>로그아웃 취소</Text>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity style={styles.whiteButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>로그아웃 하기</Text>
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
    marginTop: -20, // 버튼을 위로 올리기
  },
  sadMango:{
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginBottom: 120,
    marginTop: 70, // 이미지 위에 여백 추가
  },
  buttonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  greenButton: {
    backgroundColor: '#AFD803',
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
  space:{
    height: 10,
  }
});

export default Logout;
