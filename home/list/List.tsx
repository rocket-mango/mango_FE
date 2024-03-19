import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';

// 데이터 항목의 타입
interface MangoItem {
  mid: string;
  is_disease: string;
  disease: string;
  img_url: string;
  location: string;
}

const List: React.FC = () => {
  // State를 사용하여 API에서 가져온 데이터를 관리
  const [mangoData, setMangoData] = useState<MangoItem[]>([]);

  // 컴포넌트가 마운트될 때 데이터를 불러옴
  useEffect(() => {
    fetchMangoData();
  }, []);

  // 백엔드 API에서 망고 데이터를 불러오는 함수
  const fetchMangoData = async () => {
    try {
      const response = await fetch(
        'http://10.240.187.123:8080/api/disease/my-mango-list',
      );
      const jsonData = await response.json();
      setMangoData(jsonData.mangolist);
    } catch (error) {
      console.error(error);
    }
  };

  // 데이터를 렌더링하는 데 사용할 항목 컴포넌트
  const Item: React.FC<MangoItem> = ({disease, img_url, location}) => (
    <View style={styles.item}>
      <Image source={{uri: img_url}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.disease}>{disease}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>망고 진단 결과</Text>
      <FlatList
        data={mangoData}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.mid}
        numColumns={2} // 격자 레이아웃에서의 열의 수
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  item: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  disease: {
    fontWeight: 'bold',
  },
  location: {
    fontWeight: 'bold',
  },
});

export default List;
