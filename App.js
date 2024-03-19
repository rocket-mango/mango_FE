import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/망하지망고.png')} />
      <View style={{marginBottom: 25}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          정유진님,
          {'\n'}
          오늘도 망고가 건강한가요?
        </Text>
        <Button title="진단하러 가기" />
        <Text>버튼을 눌러 망고를 진단해보세요!</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>최근 진단 기록</Text>
        <TouchableOpacity>
          <Image source={require('./assets/arrow_go.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: 300,
          height: 80,
          borderRadius: 6,
          backgroundColor: '#F8F8F8',
          padding: 10,
          marginBottom: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={require('./assets/happy_mango.png')} />
        <View style={{marginLeft: 15}}>
          <Text>2023.09.26</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>A-13 구역</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 300,
          height: 80,
          borderRadius: 6,
          backgroundColor: '#F8F8F8',
          padding: 10,
          marginBottom: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={require('./assets/happy_mango.png')} />
        <View style={{marginLeft: 15}}>
          <Text>2023.07.23</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>B-27 구역</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 300,
          height: 80,
          borderRadius: 6,
          backgroundColor: '#F8F8F8',
          padding: 10,
          marginBottom: 25,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={require('./assets/sad_mango.png')} />
        <View style={{marginLeft: 15}}>
          <Text>2022.02.25</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>A-13 구역</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>오늘의 망고 날씨</Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#676767'}}>
          오늘은 망고가 자라기에 최적의 날씨에요
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#676767'}}>
            맑음
          </Text>
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 7.5,
              backgroundColor: 'red',
            }}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#676767'}}>
            25º
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#676767'}}>
            미세먼지
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#6CBF00'}}>
            좋음
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
