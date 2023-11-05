import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { modalProps } from '../../interfaces/componentInterfaces';


export const CustomModal = ({ visible, closeModal,takeGallery,takePhoto }: modalProps) => {
  const [animation] = useState(new Animated.Value(0));

  const openModal = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const closeModalAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      closeModal();
    });
  };

  useEffect(() => {
    if (visible) {
      openModal();
    } else {
      closeModalAnimation();
    }
  }, [visible]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 1],
  });

  return (
    <Modal
      animationType="none"
      statusBarTranslucent
      transparent
      visible={visible}
      onRequestClose={closeModalAnimation}
    >
      <TouchableWithoutFeedback
        onPress={closeModalAnimation}
      >

        <View style={styles.centeredView}>
          <Animated.View style={[styles.modalView, { transform: [{ translateY }] }]}>
            <View style={{ width: '100%' }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={takePhoto}
                style={{ paddingHorizontal: 20, paddingTop: 15 }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                  <View style={{ backgroundColor: '#32BC82', borderRadius: 100, padding: 8 }}>
                    <Icon name="camera" size={25} />
                  </View>
                  <Text style={{ fontSize: 18, color: "#32BC82", fontWeight: "600" }}>Tomar una foto</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.5}
                style={{ paddingHorizontal: 20, paddingVertical: 15 }}
                onPress={takeGallery}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                  <View style={{ backgroundColor: '#32BC82', borderRadius: 100, padding: 8 }}>
                    <Icon name="images" size={25} />
                  </View>
                  <Text style={{ fontSize: 18, color: "#32BC82", fontWeight: "600" }}>Elegir desde galería</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal >
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    marginTop: 15,
    backgroundColor: 'white',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
});
