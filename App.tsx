import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./home";
import { Test } from "./test";
import { Result } from "./test/result";
//import { My } from "./my";
import { List } from "./home/list";
import { Login } from "./login";
import My from './my/My';  // My
import UserInfoScreen from './my/Change'; // Change.tsx에서 정의된 컴포넌트

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const TestStack = createStackNavigator();
const MyStack=createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="홈"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="진단 기록"
        component={List}
        options={{
          headerBackTitleVisible: false, // 뒤로가기 버튼의 제목 숨기기
        }}
      />
    </HomeStack.Navigator>
  );
}

function TestStackScreen() {
  return (
    <TestStack.Navigator>
      <TestStack.Screen name="질병 업로드" component={Test} />
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
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="질병식별"
        component={TestStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="마이 페이지" component={MyStackScreen} />
    </Tab.Navigator>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <LoginStack.Navigator
//         screenOptions={{ headerShown: false }}
//         initialRouteName="로그인"
//       >
    
//         {/*<LoginStack.Screen
//           name="로그인"
//           component={Login}
//           options={{ headerShown: false }}
//   /> */}
//         <LoginStack.Screen name="앱 화면" component={AppScreen} />
//       </LoginStack.Navigator>
//     </NavigationContainer>
//   );
// }

function MyStackScreen() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="MyPage" component={My} options={{ headerShown: false }} />
      <MyStack.Screen name="Change" component={UserInfoScreen} options={{ title: '정보 수정' }} />
    </MyStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="로그인"
      >
        {<LoginStack.Screen
          name="로그인"
          component={Login}
          options={{ headerShown: false }}
  /> }
        <LoginStack.Screen name="앱 화면" component={AppScreen} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}
