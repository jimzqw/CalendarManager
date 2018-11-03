import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const TabIcon = ({ name, text }) => {
  const { textStyle } = styles;

  return (
    <View>
        <Icon name={name} />
        <Text style={textStyle}>{text}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { TabIcon };
