import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation";

interface DiseaseData {
  mango: {
    createdDate: string;
    mid: number;
    img_url: string;
    location: string;
    is_disease: boolean;
  };
  disease: {
    name: string;
    symptom: string;
    reason: string;
    handle: string;
  };
}

type HistoryRouteProp = RouteProp<RootStackParamList, "History">;

const History: React.FC = () => {
  const route = useRoute<HistoryRouteProp>();
  const { mid } = route.params;
  const [diseaseData, setDiseaseData] = useState<DiseaseData | null>(null);
  const navigation = useNavigation();

  const backendUrl=process.env.REACT_APP_BACKEND_URL;
  const fetchDiseaseData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("토큰이 없습니다.");
      }

      const response = await axios.get<DiseaseData>(
        `https://api.capston-test-mm.p-e.kr/api/disease/${mid}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const mango = response.data.mango;
      const disease = response.data.disease;

      console.log(response.data);
      const transformedDiseaseData: DiseaseData = {
        mango: {
          createdDate: mango.createdDate.substring(0, 10),
          mid: mango.mid,
          img_url: mango.img_url,
          location: mango.location,
          is_disease: mango.is_disease, //오류 안 나는데 왜..?
        },
        disease: {
          name: disease.name,
          symptom: disease.symptom,
          reason: disease.reason,
          handle: disease.handle,
        },
      };
      setDiseaseData(transformedDiseaseData);
    } catch (error) {
      console.error("진단 기록 상세 정보를 불러오는 데 실패했습니다: ", error);
    }
  };

  useEffect(() => {
    fetchDiseaseData();
  }, [mid]);

  const handleDelete = async () => {
    try {
      if (!diseaseData){
        console.error("데이터가 존재하지 않습니다.");
        return;
      }
      Alert.alert("망고 삭제 확인", "정말로 삭제하시겠습니까?", [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "삭제",
          onPress: async () => {
            await axios.delete(
              `http://3.36.74.4:8080/api/disease/lists/delete/${diseaseData.mango.mid}`,
              {
                headers: {
                  Authorization: `${await AsyncStorage.getItem("token")}`,
                },
              }
            );
            navigation.goBack(); // 이전 화면으로 이동
          },
          style: "destructive",
        },
      ]);
    } catch (error) {
      console.error("목록 삭제에 실패했습니다: ", error);
    }
  };

  return (
    <ScrollView style={styles.screenContainer}>
      {diseaseData ? (
        <>
          <View
            style={[
              styles.resultSection,
              diseaseData.mango.is_disease
                ? styles.diseasedBackground
                : styles.healthyBackground,
            ]}
          >
            <Text
              style={styles.location}
            >{`${diseaseData.mango.location} 구역`}</Text>
            {diseaseData.mango.img_url && (
              <Image
                source={{ uri: diseaseData.mango.img_url }}
                style={styles.image}
              />
            )}
            <Text style={styles.diseaseStatus}>
              {diseaseData.mango.is_disease ? (
                <>
                  이 망고는{" "}
                  <Text style={styles.diseaseName}>
                    {diseaseData.disease.name}
                  </Text>{" "}
                  입니다.
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
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.dateText}>
                  진단일 {diseaseData.mango.createdDate}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDelete}
              >
                <Text style={styles.deleteButtonText}>결과 삭제</Text>
                <Image
                  source={require("../../assets/delete.png")}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            </View>

            {diseaseData.mango.is_disease ? (
              <View>
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>질병의 특징</Text>
                  <Text style={styles.detailText}>
                    {diseaseData.disease?.symptom}
                  </Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>원인 분석</Text>
                  <Text style={styles.detailText}>
                    {diseaseData.disease?.reason}
                  </Text>
                </View>
                <View style={styles.separator} />

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>대처 방법</Text>
                  <Text style={styles.detailText}>
                    {diseaseData.disease?.handle}
                  </Text>
                </View>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.button}
                //onPress={() => navigation.navigate("진단 기록")}
              >
                <Text style={styles.buttonText}>나의 진단 기록 보러가기</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
      <View style={{ height: 36 }} />
    </ScrollView>
  );
};

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
    marginBottom: 10,
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
    fontSize: 28, // 질병 이름의 폰트 크기 조정
    fontWeight: "bold",
    color: "white",
  },
  healthyText: {
    fontSize: 22, // "건강합니다"의 폰트 크기 조정
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
    fontWeight: "800",
    marginBottom: 16,
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
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 20,
  },
  section: {},
});

export default History;
