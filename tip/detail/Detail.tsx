import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation";
import Config from 'react-native-config';

interface FarmingInfo {
  fid: string;
  topic: string;
  title1: string;
  summary: string;
  refImageUrl: string;
  content1: string;
  imageUrl1: string;
  title2: string;
  content2: string;
  imageUrl2: string;
  youtubeUrl: string;
}

type DetailRouteProp = RouteProp<RootStackParamList, "Detail">;
type DetailNavigationProp = StackNavigationProp<RootStackParamList, "Detail">;

// 선택한 목록에 해당하는 경로
interface RouteParams {
  fid: string;
}

const Detail: React.FC =() => {
  const route = useRoute<DetailRouteProp>();
  const navigation = useNavigation<DetailNavigationProp>();
  const { fid } = route.params;
  const [farmingInfo, setFarmingInfo] = useState<FarmingInfo | null>(null);

  const fetchFarmingInfo = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("토큰이 없습니다.");
      }

      console.log(`Request URL: ${Config.REACT_APP_BACKEND_URL}/api/farmingInfo/${fid}`);

      const response = await axios.get(
        `${Config.REACT_APP_BACKEND_URL}/api/farmingInfo/${fid}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("API 응답:", response.data);
      const farmingInfoData = response.data.farminginfo;
      const transformedTipData = {
      fid: farmingInfoData.fid,
      topic: farmingInfoData.topic,
      title1: farmingInfoData.title1,
      summary: farmingInfoData.summary,
      refImageUrl: farmingInfoData.refImageUrl,
      content1: farmingInfoData.content1,
      imageUrl1: farmingInfoData.imageurl1,  // API 응답이 'imageurl1'로 되어 있으므로 주의
      title2: farmingInfoData.title2,
      content2: farmingInfoData.content2,
      imageUrl2: farmingInfoData.imageurl2,  // 마찬가지로 'imageurl2'
      youtubeUrl: farmingInfoData.youtubeurl,  // 'youtubeurl' 주의
};

      setFarmingInfo(transformedTipData);
    } catch (error) {
      console.error("재배 팁 정보를 불러오는 데 실패했습니다: ", error);
    }
  };

  useEffect(() => {
    fetchFarmingInfo();
  }, [fid]);

  if (!farmingInfo) {
    return (
      <View
        style={[
          styles.screenContainer,
          styles.alginCenterContainer,
          styles.justifyCenterContainer,
        ]}
      >
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screen}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.topic}>{farmingInfo.topic}</Text>
          <Image
            source={{ uri: farmingInfo.refImageUrl }}
            style={styles.refImage}
          />
        </View>
        <Text style={styles.summary}>{farmingInfo.summary}</Text>
      </View>
      <View
        style={{ height: 4, backgroundColor: "#EEEEEE", marginBottom: 36 }}
      />
      <View style={{ marginHorizontal: 24 }}>
        <Text style={styles.title}>{farmingInfo.title1}</Text>
        <Text style={styles.content}>{farmingInfo.content1}</Text>
        {farmingInfo.imageUrl1 && (
          <Image source={{ uri: farmingInfo.imageUrl1 }} style={styles.image} />
        )}
        <View style={styles.split} />
        <Text style={styles.title}>{farmingInfo.title2}</Text>
        <Text style={styles.content}>{farmingInfo.content2}</Text>
        {farmingInfo.imageUrl2 && (
          <Image
            source={{
              uri: farmingInfo.imageUrl2,
            }}
            style={styles.image}
          />
        )}
        {farmingInfo.youtubeUrl && (
          <Text style={styles.youtube}>{farmingInfo.youtubeUrl}</Text>
        )}
      </View>
      <View style={styles.screenBottom} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" },
  screen: {
    marginHorizontal: 24,
    marginTop: 40,
  },
  screenBottom: {
    marginBottom: 36,
  },
  space: { marginBottom: 36 }, //콘텐츠 간 간격
  alginCenterContainer: { alignItems: "center" },
  justifyCenterContainer: { justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "800", marginBottom: 16 }, //콘텐츠 제목
  refImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  topic: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    marginBottom: 24,
    fontWeight: "500",
  },
  split: {
    borderWidth: 1,
    borderColor: "#CDCDCD",
    marginTop: 24,
    marginBottom: 36,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 6,
    marginBottom: 10,
  },
  youtube: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Detail;