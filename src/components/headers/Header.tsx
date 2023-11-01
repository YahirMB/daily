import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

type HeaderButton = {
  child: JSX.Element;
  onPress?: () => void;
};

type Props = {
  leftButton?: HeaderButton;
  rightButton?: HeaderButton;
};

export const Header = (props: Props) => {
  const {leftButton, rightButton} = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {leftButton && (
          <TouchableOpacity onPress={leftButton.onPress}>
            {leftButton.child}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.middleContainer}>
        <Text style={{fontSize: 20, color: '#FFFFFF'}}>AGENDAR</Text>
      </View>
      <View style={styles.rightContainer}>
        {rightButton && (
          <TouchableOpacity onPress={rightButton.onPress}>
            {rightButton.child}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   Text:{
    fontSize: 20,
    color: '#FFFFFF',
   },


  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#32BC82',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    textAlign: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});