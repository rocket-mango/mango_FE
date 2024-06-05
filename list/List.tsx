import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../navigation";

const backendUrl=process.env.REACT_APP_BACKEND_URL;
// 데이터 항목의 타입
interface MangoItem {
  mid: string;
  is_disease: string;
  disease: string;
  img_url: string;
  location: string;
  date: string;
}

const List: React.FC = () => {
  const [mangoData, setMangoData] = useState<MangoItem[]>([]); // API에서 가져온 데이터 관리
  const [searchQuery, setSearchQuery] = useState<string>(""); // 검색창에 입력한 내용
  const [searchedMangoData, setSearchedMangoData] = useState<MangoItem[]>([]); // 검색된 망고 데이터
  const [selectedFilter, setSelectedFilter] = useState<string>("all"); // 질병망고 or 건강망고 필터링 버튼 이름
  const [filteredMangoData, setFilteredMangoData] = useState<MangoItem[]>([]); // 필터된 망고 데이터
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // 백엔드 API에서 망고 데이터를 불러오는 함수
  const fetchMangoData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("토큰이 없습니다.");
      }

      const response = await axios.get(
        `https://api.capston-test-mm.p-e.kr/api/disease/my-mango-list`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const transformedMangoData = response.data.mangolist.map((item: any) => ({
        mid: item.mid.toString(),
        is_disease: item._disease ? "true" : "false",
        disease: item.disease,
        img_url: item.img_url,
        location: item.location,
        date: new Date(item.createdDate).toISOString(),
      }));
      setMangoData(transformedMangoData); // 응답 데이터를 상태로 설정
    } catch (error) {
      console.error("목록을 불러오는 데 실패했습니다: ", error);
    }
  };
  // 컴포넌트가 마운트될 때 데이터를 불러옴
  useEffect(() => {
    fetchMangoData();
  }, []);

  useEffect(() => {
    setFilteredMangoData(mangoData);
  }, [mangoData]);

  const handleSearch = async (query: string) => {
    try {
      // 검색어가 빈 문자열인 경우 전체 망고 데이터를 표시
      if (!query.trim()) {
        setFilteredMangoData(mangoData);
        return;
      }

      // 검색어를 소문자로 변환하여 대소문자 구분 없이 비교
      const lowerCaseQuery = query.toLowerCase();

      // 검색어와 일치하는 location을 갖는 망고 데이터 필터링
      const searchFilteredData = mangoData.filter((item) =>
        item.location.toLowerCase().includes(lowerCaseQuery)
      );

      setSearchedMangoData(searchFilteredData); // 검색 결과를 상태로 설정
    } catch (error) {
      console.error("검색 결과를 불러오는 데 실패했습니다: ", error);
    }
  };

  // 검색 쿼리가 변경될 때마다 검색 필터링 실행
  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  // 검색된 데이터나 선택된 필터가 변경될 때마다 필터링된 데이터 갱신
  useEffect(() => {
    if (searchedMangoData.length > 0) {
      // 검색된 데이터가 있으면 검색된 데이터를 기준으로 필터링
      handleFilterChange(selectedFilter, searchedMangoData);
    } else {
      // 검색된 데이터가 없으면 전체 망고 데이터를 기준으로 필터링
      handleFilterChange(selectedFilter, mangoData);
    }
  }, [selectedFilter, searchedMangoData]);

  const handleFilterChange = (buttonName: string, data: MangoItem[]) => {
    setSelectedFilter(buttonName);
    // 선택된 필터에 따라 필터링된 데이터 설정
    if (buttonName === "all") {
      setFilteredMangoData(data); // 모든 망고 데이터 표시
    } else if (buttonName === "disease") {
      const diseaseMangoData = data.filter(
        (item) => item.is_disease === "true"
      );
      setFilteredMangoData(diseaseMangoData); // 질병 망고만 표시
    } else if (buttonName === "health") {
      const healthMangoData = data.filter(
        (item) => item.is_disease === "false"
      );
      setFilteredMangoData(healthMangoData); // 건강 망고만 표시
    }
  };

  // 목록 삭제
  const handleDelete = async (mid: any) => {
    try {
      Alert.alert(
        "망고 삭제 확인",
        "정말로 삭제하시겠습니까?",
        [
          {
            text: "취소",
            style: "cancel",
          },
          {
            text: "삭제",
            onPress: async () => {
              await axios.delete(
                `http://3.36.74.4:8080/api/disease/lists/delete/${mid}`,
                {
                  headers: {
                    Authorization: `${await AsyncStorage.getItem("token")}`,
                  },
                }
              );
              // 삭제된 항목을 화면에서 제거
              const updatedMangoData = mangoData.filter(
                (list) => list.mid !== mid
              );
              setMangoData(updatedMangoData); // 상태 업데이트
            },
            style: "destructive",
          },
        ],
        { cancelable: true }
      );
    } catch (error) {
      console.error("목록 삭제에 실패했습니다: ", error);
    }
  };

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screen}>
        {/*검색창*/}
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="구역을 검색해보세요."
            onSubmitEditing={() => handleSearch(searchQuery)} //엔터 키 눌렀을 때 호출
          />
          <TouchableOpacity onPress={() => handleSearch(searchQuery)}>
            <Image
              source={require("../assets/search.png")}
              style={styles.searchButton}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedFilter === "all" && styles.selectedButton,
            ]}
            onPress={() =>
              handleFilterChange(
                "all",
                searchedMangoData.length > 0 ? searchedMangoData : mangoData
              )
            }
          >
            <Text
              style={[
                styles.buttonText,
                selectedFilter === "all" && styles.selectedText,
              ]}
            >
              전체
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedFilter === "disease" && styles.selectedButton,
            ]}
            onPress={() =>
              handleFilterChange(
                "disease",
                searchedMangoData.length > 0 ? searchedMangoData : mangoData
              )
            }
          >
            <Text
              style={[
                styles.buttonText,
                selectedFilter === "disease" && styles.selectedText,
              ]}
            >
              질병 망고
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedFilter === "health" && styles.selectedButton,
            ]}
            onPress={() =>
              handleFilterChange(
                "health",
                searchedMangoData.length > 0 ? searchedMangoData : mangoData
              )
            }
          >
            <Text
              style={[
                styles.buttonText,
                selectedFilter === "health" && styles.selectedText,
              ]}
            >
              건강 망고
            </Text>
          </TouchableOpacity>
        </View>

        {/*목록*/}
        {filteredMangoData.map((item) => (
          <TouchableOpacity
            key={item.mid}
            style={{ marginBottom: 12 }}
            onPress={() => {
              if (item.mid) {
                navigation.navigate("History", { mid: item.mid.toString() }); // 수정된 부분
              } else {
                console.error("item.mid가 null 또는 undefined입니다.");
              }
            }}
          >
            <View
              style={{
                width: 310,
                height: 110,
                backgroundColor: "#F9F9F9",
                borderWidth: 2,
                borderColor: item.is_disease === "true" ? "#E74B2F" : "#AFD803",
                borderRadius: 6,
                marginRight: 12,
                justifyContent: "center",
                paddingHorizontal: 18,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{ uri: item.img_url }}
                  style={{ width: 80, height: 80, borderRadius: 3 }}
                />
                <View
                  style={{ justifyContent: "space-between", marginLeft: 16 }}
                >
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                      {item.location} 구역
                    </Text>

                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {item.disease}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 14, fontWeight: "600" }}>
                    진단일 {item.date.slice(0, 10)}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleDelete(item.mid)}>
                <Image
                  source={require("../assets/delete.png")}
                  style={{
                    width: 24,
                    height: 24,
                    position: "absolute",
                    right: 0,
                    top: -80,
                  }}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" }, //ScrollView
  screen: {
    marginHorizontal: 24,
    marginTop: 40,
  },
  screenBottom: {
    marginBottom: 36,
  },
  container: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#787878",
  },
  input: {
    padding: 8,
    fontSize: 16,
  },
  searchButton: {
    width: 24,
    height: 24,
  },

  item: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  disease: {
    fontWeight: "bold",
  },
  location: {
    fontWeight: "bold",
  },

  //질병 망고 필터링 버튼
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 24,
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#9F9F9F",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#FECA1A",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9F9F9F",
  },
  selectedText: {
    color: "black",
  },
});

export default List;
