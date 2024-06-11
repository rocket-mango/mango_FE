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
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Result() {
  const navigation = useNavigation();
  const route = useRoute();
  const { img_url, location } = route.params || {};

  const [isLoading, setIsLoading] = useState(true);
  const [testResult, setTestResult] = useState({
    diseaseResult: {
      is_disease: false,
      img_url: "",
    },
    uploadInfo: {
      location: "",
      date: "",
    },
    top3List: [],
    diseaseInfo: {
      description: "",
      cause: "",
      treatment: "",
    },
  });

  useEffect(() => {
    if (img_url && location) {
      fetchDiagnosis(img_url, location);
    } else {
      //Alert.alert("오류", "이미지를 업로드 해주세요.");
      navigation.goBack();
    }
  }, []);

  async function fetchDiagnosis(imgUrl, loc) {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        Alert.alert("오류", "토큰이 없습니다. 다시 로그인 해주세요.");
        navigation.navigate("Login");
        return;
      }

      const formData = new FormData();
      formData.append("mangoImage", {
        uri: imgUrl,
        type: "image/png",
        name: "upload.png",
      });
      formData.append("location", loc);

      const response = await axios.post(
        `https://api.capston-test-mm.p-e.kr/api/disease/diagnosis`,
        formData,
        {
          headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi7KCV7Jyg7KeEIiwidXNlcm5hbWUiOiJ5dWppbjAwIiwibmlja25hbWUiOiJ5dWppbmFsaWNlIiwiZW1haWwiOiJ3amRkYndsc0Bld2hhaW4ubmV0Iiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxNzU4MjAzOCwiZXhwIjoxNzE3NTg1NjM4fQ.bgGQNetcrxC-M11gcrXK4QtswJADF5RXC7MhaS43ZwA`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      //console.log("API 응답: ", response.data);
      const { mango, top3List, disease } = response.data;
      console.log("응답 데이터: ", response.data);

      if (mango && typeof mango._disease !== 'undefined') {
        setTestResult({
          diseaseResult: {
            is_disease: mango._disease,
            img_url: mango.img_url,
          },
          uploadInfo: {
            location: mango.location,
            date: new Date(mango.createdDate).toISOString().split("T")[0],
          },
          top3List: top3List || [],
          diseaseInfo: {
            description: disease.symptom,
            cause: disease.reason,
            treatment: disease.handle,
          },
        });
      } else {
        console.error("is_disease 값이 없습니다: ", mango);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Fetching diagnosis failed: ", error);
      setIsLoading(false);
      if (error.response && error.response.status === 401) {
        Alert.alert("Authentication Error", "세션이 만료되었습니다. 다시 로그인 해주세요.");
        navigation.navigate("Login");
      } else {
        Alert.alert("Fetch Error", "진단 데이터를 불러오는 데 실패했습니다.");
      }
    }
  }

  const deleteMango = (mid) => {
    console.log("Delete mango with id:", mid);
    Alert.alert("삭제되었습니다");
  };

  const confirmDelete = () => {
    Alert.alert("망고 삭제 확인", "정말로 삭제하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "삭제",
        onPress: () => deleteMango(testResult.diseaseResult.mid),
        style: "destructive",
      },
    ]);
  };

  return (
    <ScrollView style={styles.screenContainer}>
      <View
        style={[
          styles.resultSection,
          testResult.diseaseResult.is_disease
            ? styles.diseasedBackground
            : styles.healthyBackground,
        ]}
      >
        <Text style={styles.location}>{`${testResult.uploadInfo.location} 구역`}</Text>
        {testResult.diseaseResult.img_url && (
          <Image
            source={{ uri: testResult.diseaseResult.img_url }}
            style={styles.image}
          />
        )}
        <Text style={styles.diseaseStatus}>
          {testResult.diseaseResult.is_disease ? (
            <>
              이 망고는{" "}
              <Text style={styles.diseaseName}>{testResult.top3List[0]}</Text> 입니다.{" "}
              <Text style={styles.diseaseName}>{testResult.top3List[1]}</Text>과{" "}
              <Text style={styles.diseaseName}>{testResult.top3List[2]}</Text>의 가능성이 있습니다.
              
            </>
          ) : (
            <>
              이망고는 <Text style={styles.healthyText}>건강합니다</Text>.
            </>
          )}
        </Text>
      </View>
      <View style={{ marginHorizontal: 24, marginTop: 20 }}>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 14,
              borderBottomWidth: 1,
              marginBottom: 30,
              }}
            >
      
        <Text style={styles.dateText}>진단일 {testResult.uploadInfo.date}</Text>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={confirmDelete}
        >
          <Text style={styles.deleteButtonText}>결과 삭제</Text>
          <Image
                  source={require("../../assets/delete.png")}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
          <Icon name="trash" size={16} color="white" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      </View>
      {testResult.diseaseResult.is_disease ? (
        <View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>질병의 특징</Text>
            <Text style={styles.detailText}>
              {testResult.diseaseInfo?.description}
            </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>원인 분석</Text>
            <Text style={styles.detailText}>{testResult.diseaseInfo?.cause}</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>대처 방법</Text>
            <Text style={styles.detailText}>
              {testResult.diseaseInfo?.treatment}
            </Text>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("진단 기록")}
        >
          <Text style={styles.buttonText}>나의 진단 기록 보러가기</Text>
        </TouchableOpacity>
      )}</View>
      <View style={{ height: 36 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" },
  space: { marginBottom: 45 },
  alginCenterContainer: { alignItems: "center" },
  justifyCenterContainer: { justifyContent: "center" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  diseasedBackground: {
    backgroundColor: "#E74B2F",
    width: "100%",
    padding: 20,
  },
  healthyBackground: {
    backgroundColor: "#AFD803",
    width: "100%",
    padding: 20,
  },
  dateText: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    fontSize: 16,
    color: "black",
    marginRight: 5,
    fontWeight: "600",
  },
  location: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom:10
  },
  image: {
    width: 200,
    aspectRatio: 1,
    marginTop: 10,
  },
  diseaseStatus: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  diseaseName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  healthyText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#FECA1A",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom:16,
    //marginTop: 10,
    color: "black",
  },
  resultSection: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 20,
  },
});
