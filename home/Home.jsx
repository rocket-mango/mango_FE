import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Geolocation from "@react-native-community/geolocation";

export default function Home() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const navigation = useNavigation();

  
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
  

  const [resultList, setResultList] = useState([]);
  useEffect(() => {
    const fetchResultList = async () => {
      //const token = '';
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get('http://43.200.174.193:8080/api/disease/my-mango-list', {
          headers: {
            Authorization: token
          }
        });
        setResultList(response.data.mangolist);
      } catch (error) {
        console.error("목록을 불러오는 데 실패했습니다: ", error);
      }
    };
  
    fetchResultList();
  }, []);

  /*useEffect(() => {
    const fetchResultList = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/disease/my-mango-list`
        );
        const jsonData = await response.json();
        setResultList(jsonData.mangolist);
      } catch (error) {
        console.error("목록을 불러오는 데 실패했습니다: ", error);
      }
    };
    */

    /*
    const fetchResultList = async () => {
      try {
        //const token = await AsyncStorage.getItem("token");
        // API 요청을 보내고 응답 데이터를 상태로 설정, 요청 헤더에 JWT 토큰 포함
        const response = await axios.get(
          "http://10.240.253.194:8080//api/disease/my-mango-list"
          //{ headers: { Authorization: token } }
        );
        console.log("response :", response);
        setResultList(response.data);
      } catch (error) {
        console.error("목록을 불러오는 데 실패했습니다: ", error);
      }
    };
    

    fetchResultList();
  }, []);

  /*
  const listData = [
    {
      date: "2023.09.26",
      area: "A-13 구역",
      image: require("../assets/happy_mango.png"),
    },
    {
      date: "2023.07.23",
      area: "B-27 구역",
      image: require("../assets/happy_mango.png"),
    },
    {
      date: "2022.02.25",
      area: "A-13 구역",
      image: require("../assets/sad_mango.png"),
    },
  ];
  */

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screen}>
        <View style={styles.alginCenterContainer}>
          <Image
            style={styles.logoImg}
            source={require("../assets/망하지망고.png")}
          />
        </View>

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
            <Text style={{ color: "#606060" }}>
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
            onPress={() => navigation.navigate("진단 기록")}
          >
            <Image
              style={styles.arrowButton}
              source={require("../assets/arrow_go.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 35 }}>
          {resultList.slice(0, 3).map((item, index) => (
            <TouchableOpacity key={index} style={styles.listBox}>
              {/*<Image source={item.img_url} />*/}
              <Image source={require("../assets/sad_mango.png")}/>
              <View style={{ marginLeft: 15 }}>
                <Text>{item.createdDate.substring(0, 10)}</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.location}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.space}>
          <Text style={styles.title}>오늘의 망고 날씨</Text>
          <View style={{ marginBottom: 15 }} />
          <Text style={styles.weatherText}>
            오늘은 망고가 자라기에 최적의 날씨에요
          </Text>
          <View style={{ flexDirection: "row" }}>
          <Text style={styles.weatherText}>맑음</Text>
            
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 7.5,
                backgroundColor: "red",
                marginRight:10
              }}
            />
            <Text style={styles.weatherText}>25º</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.weatherText}>미세먼지</Text>
            <Text style={styles.weatherText}>좋음</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: { flex: 1, backgroundColor: "white" },
  screen: {
    marginHorizontal: 40,
    marginTop: 50,
  },
  space: { marginBottom: 45 },
  alginCenterContainer: { alignItems: "center" },
  justifyCenterContainer: { justifyContent: "center" },
  logoImg: { margin: 20, marginBottom: 50 },
  title: { fontSize: 20, fontWeight: "bold" },
  button: {
    width: "100%",
    height: 50,
    marginVertical: 15,
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
  arrowButton: { width: 25, height: 25 },
  listBox: {
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 6,
    backgroundColor: "#F8F8F8",
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  weatherText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#676767",
    marginBottom: 8,
  },
});
