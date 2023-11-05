import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const TakePhoto = () => {
  const [imageSource, setImageSource] = useState(null);

  const openImagePicker = () => {
    Alert.alert(
      'Seleccionar fuente de imagen',
      '¿De dónde deseas seleccionar la imagen?',
      [
        {
          text: 'Cámara',
          onPress: () => selectImageFromCamera(),
        },
        {
          text: 'Galería',
          onPress: () => selectImageFromGallery(),
        },
      ],
      { cancelable: true }
    );
  };

  const selectImageFromGallery = () => {
    const options = {
      title: 'Selecciona una imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('El usuario canceló la selección de imagen');
      } else if (response.error) {
        console.log('Ocurrió un error: ', response.error);
      } else {
        // La imagen seleccionada está en response.uri
        setImageSource({ uri: response.uri });
      }
    });
  };

  const selectImageFromCamera = () => {
    const options = {
      title: 'Toma una foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('El usuario canceló la toma de foto');
      } else if (response.error) {
        console.log('Ocurrió un error: ', response.error);
      } else {
        // La imagen capturada está en response.uri
        setImageSource({ uri: response.uri });
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {imageSource && <Image source={imageSource} style={{ width: 200, height: 200 }} />}

      <Button title="Abrir Cámara" onPress={openImagePicker} />
    </View>
  );
};

export default TakePhoto;
