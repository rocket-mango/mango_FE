import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function My() {
  const navigation = useNavigation();

  const infoTitle = ["이메일", "닉네임", "이름", "아이디", "비밀번호"];
  const [userInfo, setUserInfo] = useState({
    email: "yujin@google.com",
    nickname: "정유진",
    name: "정유진",
    username: "yujin00",
    password: "보안을 위해 가렸습니다."
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        // 서버에서 사용자 정보를 가져오는 부분은 주석 처리
        // const backendurl = 'http://3.36.74.4:8080/api/user/information';
        // const response = await axios.get(backendurl, {
        //   headers: {
        //     Authorization: token
        //   }
        // });
        // setUserInfo(response.data);
        
        // 로컬 스토리지에서 가져오기
        const storedUserInfo = await AsyncStorage.getItem("userInfo");
        if (storedUserInfo) {
          setUserInfo(JSON.parse(storedUserInfo));
        }
      } catch (error) {
        console.error("사용자 정보를 가져오는 데 오류가 발생했습니다:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      // 네비게이션에서 다시 포커스될 때마다 사용자 정보 갱신
      const storedUserInfo = await AsyncStorage.getItem("userInfo");
      if (storedUserInfo) {
        setUserInfo(JSON.parse(storedUserInfo));
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={[{ marginTop: 40 }, styles.screen]}>
        <View style={styles.alginCenterContainer}>
          <View style={styles.myInfo}>
            <View
              style={{
                paddingHorizontal: 10,
                paddingTop: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#CDCDCD",
                marginBottom: 18,
              }}
            >
              <View>
                {/* 사용자 정보 출력 */}
                <Text style={{ fontSize: 18, marginBottom: 20 }}>이메일: {userInfo.email}</Text>
                <Text style={{ fontSize: 18, marginBottom: 20 }}>닉네임: {userInfo.nickname}</Text>
                <Text style={{ fontSize: 18, marginBottom: 20 }}>이름: {userInfo.name}</Text>
                <Text style={{ fontSize: 18, marginBottom: 20 }}>아이디: {userInfo.username}</Text>
                <Text style={{ fontSize: 18, marginBottom: 20 }}>비밀번호: {userInfo.password}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Change', { userInfo })}
            >
              <Text style={styles.buttonText}>내 정보 수정하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ height: 4, backgroundColor: "#EEEEEE" }} />
      <View style={[styles.screen, { marginTop: 30, marginBottom: 20 }]}>
        <TouchableOpacity
          style={[styles.listBox, { backgroundColor: "#FECA1A" }]}
          onPress={() => navigation.navigate("진단 기록")}
        >
          <Text style={styles.buttonText}>나의 진단 기록 보러가기</Text>
          <Image
            style={styles.arrowButton}
            source={require("../assets/arrow_go.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listBox} onPress={() => navigation.navigate('Logout')}>
          <Text style={styles.buttonText}>로그아웃 하기</Text>
          <Image
            style={styles.arrowButton}
            source={require("../assets/arrow_go.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listBox} onPress={() => navigation.navigate('Leave')}>
          <Text style={styles.buttonText}>회원 탈퇴하기</Text>
          <Image
            style={styles.arrowButton}
            source={require("../assets/arrow_go.png")}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  screen: {
    marginHorizontal: 40,
  },
  space: { marginBottom: 45 },
  alginCenterContainer: { alignItems: "center" },
  justifyCenterContainer: { justifyContent: "center" },
  myInfo: {
    width: "100%",
    marginBottom: 30,
    padding: 20,
    borderColor: "#E6E6E6",
    borderRadius: 6,
    backgroundColor: "#F8F8F8",
    ...Platform.select({
      ios: {
        shadowColor: "rgb(0,0,0)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AFD803",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  arrowButton: { width: 25, height: 25 },
  listBox: {
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 6,
    backgroundColor: "#F8F8F8",
    padding: 10,
    paddingHorizontal: 18,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
