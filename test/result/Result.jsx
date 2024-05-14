import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Result() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [testResult, setTestResult]=useState({
    diseaseResult: {
      is_disease: false,
      img_url: "",
    },
    uploadInfo: {
      location: "",
      date: "",
    },
    top3List: [],
  });

  useEffect(() => {
    async function fetchDiagnosis() {
      try {
        const response = await fetch("10.240.151.5:8080/api/disease/diagnosis", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mango: {
              img_url: mangoImageUrl,
              location: location,
            },
          }),
        });

        if (!response.ok) {
          throw new Error("진단 정보를 가져오는 중 오류 발생");
        }

        const data = await response.json();
        setTestResult(data);
      } catch (error) {
        Alert.alert("오류", error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDiagnosis();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // 5초 후 isLoading 상태를 false로 설정
    }, 5000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, []);

  const deleteMango = (mid) => {
    fetch(`/api/disease/lists/delete/${mid}`, {
      method: 'GET',
    })
    .then(response => response.text())
    .then(data => {
      if (data === "successful delete mango") {
        Alert.alert("삭제 성공", "망고가 성공적으로 삭제되었습니다.");
        navigation.goBack(); // 삭제 후 이전 페이지로 돌아가기
      }
    })
    .catch(error => {
      console.error('Error:', error);
      Alert.alert("삭제 실패", "망고 삭제 중 오류가 발생했습니다.");
    });
  };

  const confirmDelete = () => {
    Alert.alert(
      "망고 삭제 확인",
      "정말로 삭제하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "삭제",
          onPress: () => deleteMango(testResult.mid),
          style: "destructive"
        }
      ]
    );
  };

  if (isLoading) {
    return (
      <View
        style={[
          styles.screenContainer,
          styles.alginCenterContainer,
          styles.justifyCenterContainer
        ]}
      >
        <Image
          style={{ marginBottom: 5 }}
          source={require("../../assets/protagonist_mango.png")}
        />
        <Text style={styles.title}>오늘의 망고 TMI</Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "#606060",
          }}
        >
          망고의 생육적정온도는{"\n"}24~27℃입니다.
        </Text>
        <View style={styles.space} />
        <ActivityIndicator size="large" color="#FE9821" />
        <View style={{ height: 25 }} />
        <Text style={{ color: "#606060" }}>진단 중입니다...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={[styles.resultSection, testResult.diseaseResult.is_disease ? styles.diseasedBackground : styles.healthyBackground]}>
        <Text style={styles.location}>{testResult.uploadInfo.location}</Text>
        {testResult.diseaseResult.img_url && (
          <Image
            source={{ uri: testResult.diseaseResult.img_url }}
            style={styles.image}
          />
        )}
        <Text style={styles.diseaseStatus}>
          {testResult.diseaseResult.is_disease ? `이 망고는 ${testResult.top3List[0]} 입니다. ${testResult.top3List[1]}과 ${testResult.top3List[2]}의 가능성이 있습니다.` : "이망고는 건강합니다."}
        </Text>
      </View>
      <View style={styles.dateRow}>
        <Text style={styles.dateText}>진단일 {testResult.uploadInfo.date}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={() => console.log('Delete record')}>
          <Text style={styles.deleteButtonText}>결과 삭제</Text>
          <Icon name="trash" size={16} color="white" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
        {testResult.diseaseResult.is_disease ? (
        <View>
          <View style={styles.section}>
          <Text style={styles.sectionTitle}>질병의 특징</Text>
          <Text style={styles.detailText}>{testResult.diseaseInfo?.description}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>원인 분석</Text>
          <Text style={styles.detailText}>{testResult.diseaseInfo?.cause}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>대처 방법</Text>
          <Text style={styles.detailText}>{testResult.diseaseInfo?.treatment}</Text>
        </View>
          </View>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => console.log('Go to records')}>
          <Text style={styles.buttonText}>나의 진단 기록 보러가기</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
} 

const styles = StyleSheet.create({
  screenContainer: { flex: 1, padding: 20, backgroundColor: "white" },
  space: { marginBottom: 45 },
  alginCenterContainer: { alignItems: "center" },
  justifyCenterContainer: { justifyContent: "center" },
  logoImg: { margin: 20, marginBottom: 50 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },

  diseasedBackground: {
    backgroundColor: "#FF3B30", // 빨간색
  },
  healthyBackground: {
    backgroundColor: "#4CD964", // 초록색
  },

  // button: { //이거 무슨 버튼이지?
  //   width: "100%",
  //   height: 50,
  //   marginVertical: 15,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#FECA1A",
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: "rgb(0,0,0)",
  //       shadowOffset: { width: 0, height: 2 },
  //       shadowOpacity: 0.2,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 3, // TODO: 안드로이드 버튼 그림자 수정
  //     },
  //   }),
  //   borderRadius: 10,
  // },

  dateText: {
    fontSize: 16,
    color: 'black',
  },
  deleteButton: {
    flexDirection: 'row', // 요소들을 수평으로 정렬
    alignItems: 'center', // 세로축 중앙 정렬
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    fontSize: 16,
    color: 'black',
    marginRight: 5,
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },

  diseaseStatus: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  date: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },

  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  button: { //이거 무슨 버튼이지?
    backgroundColor: "#FECA1A",
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black'
  },
  resultSection: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  diseaseDetails: {
    padding: 20,
  },
  detailText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 20,
  },
});
