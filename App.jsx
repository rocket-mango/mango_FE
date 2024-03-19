import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './home';
import {Test} from './test';
import {My} from './my';
import {List} from './home/list';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="홈"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="검사 기록" component={List} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="메인" component={HomeStackScreen} />
        <Tab.Screen name="질병식별" component={Test} />
        <Tab.Screen name="마이" component={My} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
