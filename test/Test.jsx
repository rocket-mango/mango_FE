import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Test() {
  const requestPermissions = async () => {
    try {
      const permissions = [
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ];

      const granted = await PermissionsAndroid.requestMultiple(permissions, {
        title: 'Permission Request',
        message:
          'This app needs access to your storage and camera to upload images.',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      if (
        granted['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.CAMERA'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Storage and Camera permissions granted');
      } else {
        console.log('Permissions denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const [selectImage, setSelectImage] = useState('');

  const ImagePicker = source => {
    requestPermissions().then(() => {
      let options = {
        mediaType: 'photo',
        quality: 1,
        storageOptions: {
          path: 'image',
        },
      };

      if (source === 'camera') {
        launchCamera(options, handleResponse);
      } else if (source === 'gallery') {
        launchImageLibrary(options, handleResponse);
      }
    });
  };

  const uploadImage = async imageUri => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });

      const response = await fetch(
        'http://10.240.187.123:8080/api/disease/diagnosis',
        {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      const data = await response.json();
      console.log('Image upload response:', data);
    } catch (err) {
      console.warn(err);
    }
  };

  const handleResponse = response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      console.log('ImagePicker Error:', response.errorMessage);
    } else {
      setSelectImage(response.assets[0].uri);
      console.log(response.assets[0].uri);
      uploadImage(response.assets[0].uri);
    }
  };

  return (
    <SafeAreaView>
      <View>
        {selectImage ? (
          <Image
            style={{height: 400, width: '100%'}}
            source={{uri: selectImage}}
          />
        ) : (
          <View style={{height: 400, width: '100%', backgroundColor: '#ccc'}} />
        )}
      </View>
      <TouchableOpacity
        onPress={() => {
          ImagePicker('camera'); // 카메라 소스 선택
        }}>
        <Text>카메라</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          ImagePicker('gallery'); // 갤러리 소스 선택
        }}>
        <Text>갤러리</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
