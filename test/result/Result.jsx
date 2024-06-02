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

export default function Result() { // 기본 내보내기가 아닌 명시적 내보내기로 변경
  
  const navigation = useNavigation();
  const route = useRoute();
  const { img_url, location } = route.params || {};

  const [isLoading, setIsLoading] = useState(true);
  const [testResult, setTestResult] = useState({
    diseaseResult: {
      is_disease: false,
      img_url: "", // 여기서 초기화
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
    async function fetchDiagnosis() {
      setIsLoading(true);
      setTimeout(() => {
        const data = {
          diseaseResult: {
            is_disease: Math.random() > 0.5, // 임의의 값으로 질병 여부 결정
            img_url: img_url,
          },
          uploadInfo: {
            location: location,
            date: new Date().toISOString().split("T")[0],
          },
          top3List: ["탄저병", "궤양병", "흰가루병"],
          diseaseInfo: {
            description: "잎 반점, 꽃 마름병, 시든 끝, 가지 마름병 및 과일 썩음병을 유발합니다. 잎과 가지에 작은 물집 같은 반점이 생깁니다. 어린 잎은 시들고 건조해집니다. 부드러운 가지는 시들고 죽는 증상이 나타납니다. 영향을 받은 가지는 결국 말라 버립니다. 과일에는 검은 반점이 나타납니다. 과일의 과육은 딱딱해지고, 익으면 갈라지고 썩습니다. 감염된 과일은 떨어집니다.",
            cause: "망고 탄저병은 콜레토트리쿰 글로에오스포리oides 변종 미노(완전 단계의 이름인 글로메렐라 싱굴라타 변종 미노로도 알려져 있음)라는 곰팡이에 의해 발생합니다. 이 곰팡이의 포자 생산은 습하거나 습한 날씨에서 촉진됩니다. 이러한 포자의 분산은 특히 비와 바람에 의해 촉진됩니다. 이를 통해 비교적 짧은 거리에 걸쳐 질병이 확산될 수 있습니다.",
            treatment: "꽃이 피는 시기부터 만코제브(추천 라벨 속도로 14일마다)를 정기적으로 살포하면 과일의 감염 수준을 줄이는 데 유용합니다. 수확 14일 이내에는 만코제브를 사용하지 마세요. 녹색 미숙과에 탄저병이 심해지면 프로클로라즈를 몇 차례 신중하게 살포하는 것이 좋습니다. 그러나 프로클로라즈를 과다하게 사용하면 탄저병 내성균이 생길 수 있으므로 주의해야 합니다. 망고 스캐브 방제에 권장되는 구리 스프레이는 하루의 보류 기간만으로 탄저병을 방제할 수 있습니다. 망고 과일의 탄저병 방제를 위한 수확 후 처리제가 있습니다. 프로클로라즈는 냉비순환식 스프레이로 사용됩니다. 과일 파리를 방제하기 위해 사용되는 뜨거운 물에 담그는 방법도 탄저병과 줄기 끝 부패를 방제할 수 있습니다. 뜨거운 베노밀 담그기는 탄저병을 방제할 수 있으며, 줄기 끝 부패가 문제가 되는 경우에 유용합니다.",
          },
        };
        console.log("API Response: ", data);
        setTestResult(data);
        setIsLoading(false);
      }, 5000); // 5초 후에 데이터를 설정
    }

    if (img_url && location) {
      fetchDiagnosis();
    } else {
      Alert.alert("Error", "No image URL or location provided.");
      setIsLoading(false);
    }
  }, [img_url, location]);

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
        onPress: () => deleteMango(testResult.mid),
        style: "destructive",
      },
    ]);
  };

  if (isLoading) {
    return (
      <View
        style={[
          styles.screenContainer,
          styles.alginCenterContainer,
          styles.justifyCenterContainer,
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
      <View style={styles.dateRow}>
        <Text style={styles.dateText}>진단일 {testResult.uploadInfo.date}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={confirmDelete}
        >
          <Text style={styles.deleteButtonText}>결과 삭제</Text>
          <Icon name="trash" size={16} color="white" style={styles.iconStyle} />
        </TouchableOpacity>
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
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, padding: 20, backgroundColor: "white" },
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
  },
  location: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
  },
  diseaseStatus: {
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  diseaseName: {
    fontSize: 22, // 질병 이름의 폰트 크기 조정
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
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "black",
  },
  resultSection: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  detailText: {
    fontSize: 14,
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
    marginHorizontal: 20,
  },

});