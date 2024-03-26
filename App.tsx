import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./home";
import { Test } from "./test";
import { My } from "./my";
import { List } from "./home/list";
import { Login } from "./login";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="홈"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="검사 기록" component={List} />
    </HomeStack.Navigator>
  );
}

function AppScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="메인" component={HomeStackScreen} />
      <Tab.Screen name="질병식별" component={Test} />
      <Tab.Screen name="마이" component={My} />
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
        <LoginStack.Screen name="앱 화면" component={AppScreen} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}
