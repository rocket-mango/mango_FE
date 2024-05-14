import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Alert } from 'react-native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface MangoItem {
  mid: string;
  is_disease: string;
  disease: string;
  img_url: string;
  location: string;
}

const List: React.FC = () => {
  const [mangoData, setMangoData] = useState<MangoItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get('http://10.240.151.5:8080/api/disease/my-mango-list', {
          headers: {
            Authorization: token
          }
        });
        setMangoData(response.data.mangolist);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const Item: React.FC<MangoItem> = ({ disease, img_url, location }) => (
    <View style={styles.item}>
      <Image source={{ uri: img_url }} style={styles.image} />
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
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={item => item.mid}
        numColumns={2}
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
