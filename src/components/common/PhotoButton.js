import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

const PhotoButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    width: '33.3%',
    height: Dimensions.get('window').width / 3,
    justifyContent: 'center'
    
  }
};

export { PhotoButton };
