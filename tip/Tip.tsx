import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation";
//import {REACT_APP_BACKEND_URL} from '@env';
import Config from 'react-native-config';

const backendUrl = Config.REACT_APP_BACKEND_URL;

interface FarmingInfo {
  id: number;
  topic: string;
  summary: string;
  refImageUrl: string;
}

interface FarmingInfoList {
  category: string;
  simpleFarmingInfoList: FarmingInfo[];
}

type TipNavigationProp = StackNavigationProp<RootStackParamList, "Tip">;


const Tip: React.FC=() =>{
  const [farmingInfos, setFarmingInfos] = useState<FarmingInfo[]>([]);
  const [categoryId, setCategoryId] = useState<string>("3");
  const [selectedFilter, setSelectedFilter] = useState("재배");
  const navigation = useNavigation<TipNavigationProp>();
  //const route = useRoute<RouteProp<RootStackParamList, 'Tip'>>();

  const fetchFarmingInfos = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("토큰이 없습니다.");
      }

      const response = await axios.get(`${Config.REACT_APP_BACKEND_URL}/api/farmingInfo/list/${categoryId}`, {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      console.log("API 응답:", response.data);
      const transformedTipData = response.data.simpleFarmingInfoList.map(
        (item: any) => ({
          id: item.id,
          topic: item.topic,
          summary: item.summary,
          refImageUrl: item.refImageUrl,
        })
      );
      setFarmingInfos(transformedTipData);
    } catch (error) {
      console.error("망고 팁을 불러오는 데 실패했습니다: ", error);
    }
  };

  useEffect(() => {
    fetchFarmingInfos();
  }, [categoryId]);

  const handlePress = (fid: string) => {
    navigation.navigate("Detail", { fid });
  };

  const handleFilterChange = (filter: string, categoryId: string) => {
    setSelectedFilter(filter);
    setCategoryId(categoryId);
  };

  const ListBoxColor = (filter:any) => {
    switch (filter) {
      case "재배":
        return "#FFF0DD";
      case "품종":
        return "#F0E7FF";
      case "성장":
        return "#E7F3FF";
      case "질병관리":
        return "#E6FFCD";
    }
  };

  const TopicColor = (filter:any) => {
    switch (filter) {
      case "재배":
        return "#EC6B29";
      case "품종":
        return "#9556FF";
      case "성장":
        return "#2C96FF";
      case "질병관리":
        return "#6A8401";
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.screen}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingBottom: 10,
            borderBottomWidth: 1,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => handleFilterChange("재배", "3")}>
            <Text
              style={[
                styles.buttonText,
                selectedFilter === "재배" && styles.selectedText,
              ]}
            >
              재배
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFilterChange("품종", "1")}>
            <Text
              style={[
                styles.buttonText,
                selectedFilter === "품종" && styles.selectedText,
              ]}
            >
              품종
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFilterChange("성장", "2")}>
            <Text
              style={[
                styles.buttonText,
                selectedFilter === "성장" && styles.selectedText,
              ]}
            >
              성장
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFilterChange("질병관리", "4")}>
            <Text
              style={[
                styles.buttonText,
                selectedFilter === "질병관리" && styles.selectedText,
              ]}
            >
              질병관리
            </Text>
          </TouchableOpacity>
        </View>

        {farmingInfos.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              width: "100%",
              //height: 130,
              borderRadius: 12,
              backgroundColor: ListBoxColor(selectedFilter),
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 18,
              paddingVertical:10,
              marginBottom: 12,
            }}
            onPress={() => handlePress(item.id.toString())}
          >
            <Image
              source={{ uri: item.refImageUrl }}
              style={{ width: 95, height: 95, borderRadius: 3 }}
            />
            <View style={{ flex: 1, marginLeft: 16 }}>
              <Text
                style={{
                  color: TopicColor(selectedFilter),
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                {item.topic}
              </Text>
              <Text style={{ flexWrap: "wrap" }}>{item.summary}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" }, //ScrollView
  screen: {
    marginHorizontal: 24,
    marginTop: 40,
  },
  space: { marginBottom: 36 }, //콘텐츠 간 간격
  title: { fontSize: 20, fontWeight: "800" }, //콘텐츠 제목
  buttonContainer: {},
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9F9F9F",
  },
  selectedText: {
    color: "black",
  },
});

export default Tip;
