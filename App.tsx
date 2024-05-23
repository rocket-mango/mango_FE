import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home/Home";
import Test from "./test/Test";
import { Result } from "./test/result/Result"; // 수정된 부분
import List from "./home/list/List"; // 수정된 부분
import Login from "./login/Login";
import My from './my/My';
import UserInfoScreen from './my/Change';
import Logout from './my/Logout';
import RealLogout from './my/RealLogout';
import Leave from './my/Leave';
import RealLeave from './my/RealLeave';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const TestStack = createStackNavigator();
const MyStack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Test: undefined;
  Result: { img_url: string; location: string };
  List: undefined;
  Login: undefined;
  MyPage: undefined;
  Change: { userInfo: any };
  Logout: undefined;
  RealLogout: undefined;
  Leave: undefined;
  RealLeave: undefined;
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="진단 기록"
        component={List}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

function TestStackScreen() {
  return (
    <TestStack.Navigator>
      <TestStack.Screen name="진단하기" component={Test} />
      <TestStack.Screen
        name="결과"
        component={Result}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </TestStack.Navigator>
  );
}

function MyStackScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="MyPage" component={My} options={{ headerShown: false }} />
      <MyStack.Screen name="Change" component={UserInfoScreen} options={{ title: '정보 수정' }} />
      <MyStack.Screen name="Logout" component={Logout} options={{ title: '로그아웃' }} />
      <MyStack.Screen name="RealLogout" component={RealLogout} options={{ title: '로그아웃 완료' }} />
      <MyStack.Screen name="Leave" component={Leave} options={{ title: '회원 탈퇴' }} />
      <MyStack.Screen name="RealLeave" component={RealLeave} options={{ title: '탈퇴 완료' }} />
    </MyStack.Navigator>
  );
}

function AppScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈"
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="진단하기"
        component={TestStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="마이페이지" component={MyStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <LoginStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <LoginStack.Screen name="AppScreen" component={AppScreen} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}
