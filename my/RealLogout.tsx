import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';  // RootStackParamList 가져오기

type RealLogoutScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RealLogout'>;

const RealLogout = () => {
  const navigation = useNavigation<RealLogoutScreenNavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.boldLargeText}>로그아웃이 완료되었습니다.</Text>
      <Image
        source={require("../assets/check.png")}
        style={styles.check}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.greenButton} onPress={() => navigation.navigate('Login')}>
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
    backgroundColor: '#AFD803',
    padding: 10,
    width: 300,
    alignItems: 'center',
    borderRadius: 5,
  },
  check: {
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

export default RealLogout;
