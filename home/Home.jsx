import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Geolocation from "@react-native-community/geolocation";

export default function Home() {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const navigation = useNavigation();

  /*
  // 권한 요청 처리
  useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
    }
  }, [])

  const [currentLocation, setCurrentLocation] = useState(null)
useEffect(() => {
  // 위치 업데이트 설정
  const watchId = Geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords
      // currentLocation에 위도, 경도 저장
      setCurrentLocation({ latitude, longitude })
    },
    (error) => {
      console.log(error)
    },
    {
      enableHighAccuracy: true, // 배터리를 더 소모하여 보다 정확한 위치 추적
      timeout: 20000,
      maximumAge: 0, // 한 번 찾은 위치 정보를 해당 초만큼 캐싱
      distanceFilter: 1,
    }
  )
  // 컴포넌트 언마운트 시 위치 업데이트 중지
  return () => {
    Geolocation.clearWatch(watchId)
  }
}, [])

  */

  /*
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        fetchWeatherData(latitude, longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&lang=kr`
      );
      const json = response.json();
      const temperature = Math.floor(json.main.temp - kel);
      setTemp(temperature);
      setWeather(json.weather[0].description);
      setWeatherIcon(
        "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
      );
    } catch (error) {
      console.error(error);
    }
  };
  */

  const [mangoData, setMangoData] = useState([]);
  useEffect(() => {
    const fetchMangoData = async () => {
      try {
        // 토큰 확인
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          throw new Error("토큰이 없습니다.");
        }

        const response = await axios.get(
          `http://3.36.74.4:8080/api/disease/my-mango-list`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const transformedMangoData = response.data.mangolist.map((item) => ({
          mid: item.mid.toString(),
          is_disease: item._disease,
          disease: item.disease,
          img_url: item.img_url,
          location: item.location,
          date: new Date(item.createdDate).toISOString(),
        }));
        setMangoData(transformedMangoData);
      } catch (error) {
        console.error("목록을 불러오는 데 실패했습니다: ", error);
      }
    };

    fetchMangoData();
  }, []);

  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollViewRef = useRef();

  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    setScrollIndex(index);
  };

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screen}>
        <View style={styles.space}>
          <Text style={styles.title}>
            정유진님,
            {"\n"}
            오늘도 망고가 건강한가요?
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("질병식별")}
          >
            <Text style={styles.buttonText}>진단하러 가기</Text>
          </TouchableOpacity>
          <View style={styles.alginCenterContainer}>
            <Text style={{ fontSize: 14, color: "#606060" }}>
              버튼을 눌러 망고를 진단해보세요!
            </Text>
          </View>
        </View>

        <View
          style={
            (styles.alginCenterContainer,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            })
          }
        >
          <Text style={styles.title}>최근 진단 기록</Text>
          <TouchableOpacity
            style={styles.justifyCenterContainer}
            onPress={() => navigation.navigate("List")}
          >
            <Text style={{ fontSize: 14, color: "#686868", fontWeight: "600" }}>
              더보기 →
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*최근 진단 기록 indicator*/}

      {mangoData.length > 0 ? (
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            ref={scrollViewRef}
            style={{ marginLeft: 24 }}
          >
            <View style={{ flexDirection: "row" }}>
              {mangoData.slice(0, 3).map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: 300,
                    height: 110,
                    backgroundColor: "#F9F9F9",
                    borderWidth: 2,
                    borderColor:
                      item.is_disease === true ? "#E74B2F" : "#AFD803",
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
                      style={{
                        justifyContent: "space-between",
                        marginLeft: 16,
                      }}
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
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {[...Array(3).keys()].map((index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  {
                    backgroundColor:
                      index === scrollIndex ? "black" : "#D9D9D9",
                  },
                ]}
              />
            ))}
          </View>
        </View>
      ) : (
        <View
          style={{
            marginHorizontal: 24,
            height: 110,
            backgroundColor: "#F9F9F9",
            borderRadius: 6,
            justifyContent: "center", // 세로축 가운데
            alignItems: "center", // 가로축 가운데
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#AAA" }}>
            질병을 진단한 기록이 없습니다.
          </Text>
        </View>
      )}

      <View style={[styles.screen, { marginTop: 0 }]}>
        <View style={styles.space} />
        <Text style={[styles.title, { marginBottom: 20 }]}>
          오늘의 망고 날씨
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                marginBottom: 2,
              }}
            >
              <Text
                style={{ fontSize: 32, fontWeight: "500", color: "#6CBF00" }}
              >
                25º
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                좋음
              </Text>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderColor: "#6CBF00",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#6CBF00",
                  paddingTop: 4,
                }}
              >
                망고가 자라기에 최적의 날씨!
              </Text>
            </View>
          </View>
          <Image
            source={require("../assets/state_mango.png")}
            style={{ width: 75, height: 75 }}
          />
        </View>

        <View style={styles.space} />

        <View
          style={
            (styles.alginCenterContainer,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            })
          }
        >
          <Text style={styles.title}>추천 망고 팁</Text>
          <TouchableOpacity
            style={styles.justifyCenterContainer}
            onPress={() => navigation.navigate("망고팁")}
          >
            <Text style={{ fontSize: 14, color: "#686868", fontWeight: "600" }}>
              더보기 →
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 12,
            backgroundColor: "#EEFFDD",
            height: 130,
            justifyContent: "center",
            paddingHorizontal: 18,
            marginBottom: 12,
          }}
          onPress={() => navigation.navigate("망고팁")}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/과수병.png")}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 16, marginTop: 12 }}>
              <Text
                style={{
                  color: "#6A8401",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                과수병 방제 기본 요령
              </Text>
              <Text style={{ flexWrap: "wrap" }}>
                건강한 망고를 키우는 2가지 방법!
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "100%",
            height: 130,
            borderRadius: 12,
            backgroundColor: "#FFF0DD",
            justifyContent: "center",
            paddingHorizontal: 18,
          }}
          onPress={() => navigation.navigate("망고팁")}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/기온팁.png")}
              style={{ width: 95, height: 95, borderRadius: 3 }}
            />
            <View style={{ flex: 1, marginLeft: 16, marginTop: 12 }}>
              <Text
                style={{
                  color: "#EC6B29",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                망고 재배 기온
              </Text>
              <Text style={{ flexWrap: "wrap" }}>
                망고 재배자들이라면, 반드시 알아야 하는 재배 기온 조절!
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.screenBottom} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" }, //ScrollView
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
  title: { fontSize: 20, fontWeight: "800" }, //콘텐츠 제목
  button: {
    width: "100%",
    height: 50,
    marginVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FECA1A",
    ...Platform.select({
      ios: {
        shadowColor: "rgb(0,0,0)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3, // TODO: 안드로이드 버튼 그림자 수정
      },
    }),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listBox: {},
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
