import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name, start_time, end_time, description } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
          <View style={[styles.item, { height: 100 }]}>
            <Text>{name}{'\n'}
                  {start_time}{'\n'}
                  {end_time}{'\n'}
                  {description}</Text>
          </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
};

export default ListItem;
