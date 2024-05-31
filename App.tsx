import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./home";
import { Test } from "./test";
import { Result } from "./test/result";
import { My } from "./my";
import { List } from "./list";
import { Login } from "./login";
import { SignUp } from "./signup";
import { TipStackScreen, HomeStackScreen } from "./navigation";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();
const LoginStack = createStackNavigator();
const TestStack = createStackNavigator();

const styles = StyleSheet.create({
  headerTitle: {
    width: 118,
    height: 26.54,
  },
  tabIcon: {
    width: 25,
    height: 25,
  },
});

function TestStackScreen() {
  return (
    <TestStack.Navigator>
      <TestStack.Screen
        name="질병 업로드"
        component={Test}
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
        }}
      />
      <TestStack.Screen
        name="진단 결과"
        component={Result}
        options={{
          headerBackTitleVisible: false, // 뒤로가기 버튼의 제목 숨기기
        }}
      />
    </TestStack.Navigator>
  );
}

function AppScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="메인"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: "#000" },
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/focusedHome.png")
                  : require("./assets/home.png")
              }
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="질병식별"
        component={TestStackScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: "#000" },
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/focusedTest.png")
                  : require("./assets/test.png")
              }
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="망고팁"
        component={TipStackScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: "#000" },
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/focusedMango.png")
                  : require("./assets/mango.png")
              }
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={My}
        options={{
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
          tabBarLabelStyle: { color: "#000" },
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("./assets/focusedMy.png")
                  : require("./assets/my.png")
              }
              style={styles.tabIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="로그인"
      >
        <LoginStack.Screen
          name="로그인"
          component={Login}
          options={{ headerShown: false }}
        />
        <LoginStack.Screen
          name="회원가입"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <LoginStack.Screen
          name="앱 화면"
          component={AppScreen}
          options={{ headerShown: false }}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}
