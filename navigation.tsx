import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./home/Home";
import List from "./list/List";
import History from "./list/history/History";
import Tip from "./tip/Tip";
import { Detail } from "./tip/detail";
import { Platform } from "react-native";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerTitle: {
    width: 118,
    height: 26.54,
  },
});

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  History: { mid: string };
  Tip: { categoryId: string };
  Detail: { fid: string };
};
const HomeStack = createStackNavigator<RootStackParamList>();
const TipStack = createStackNavigator<RootStackParamList>();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          //headerLeft: null,
          headerStyle: {
            ...Platform.select({
              ios: {
                shadowColor: "rgb(0,0,0)",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
              },
              android: {
                elevation: 10, // TODO: 안드로이드 버튼 그림자 수정
              },
            }),
          },
          headerBackTitleVisible: false,
          headerTitle: () => (
            <Image
              source={require("./assets/망하지망고.png")}
              style={styles.headerTitle}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="List"
        component={List}
        options={{
          headerStyle: {
            ...Platform.select({
              ios: {
                shadowColor: "rgb(0,0,0)",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 8,
              },
              android: {
                elevation: 10, // TODO: 안드로이드 버튼 그림자 수정
              },
            }),
          },
          headerBackTitleVisible: false, // 뒤로가기 버튼의 제목 숨기기
          headerTitle: "진단 기록",
        }}
      />
      <HomeStack.Screen
        name="History"
        component={History}
        options={{ headerTitle: "진단 결과", headerBackTitleVisible: false }}
      />
    </HomeStack.Navigator>
  );
}

const TipStackScreen = () => {
  return (
    <TipStack.Navigator initialRouteName="Tip">
      <TipStack.Screen
        name="Tip"
        component={Tip}
        options={{
          headerTitle: "망고 팁",
          //headerLeft: null,
          headerStyle: {
            ...Platform.select({
              ios: {
                shadowColor: "rgb(0,0,0)",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
              },
              android: {
                elevation: 12, // TODO: 안드로이드 버튼 그림자 수정
              },
            }),
          },
        }}
      />
      <TipStack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: "망고 팁",
          headerBackTitleVisible: false,
        }}
      />
    </TipStack.Navigator>
  );
};

export { TipStackScreen, HomeStackScreen };
