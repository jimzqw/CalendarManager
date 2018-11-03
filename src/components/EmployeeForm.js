import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { Divider } from 'react-native-elements';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

const currentDate = new Date().toISOString().split('T')[0];
class EmployeeForm extends Component {

  setDate() {
    if (this.props.date === '') {
      this.props.employeeUpdate({ prop: 'date', value: currentDate });
    }
  }

  render() {
    this.setDate();
    return (
      <View>

       <CardSection>
        <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>Date</Text>
          <DatePicker
            style={{ width: 100, paddingLeft: 5, flex: 2 }}
            date={this.props.date === '' ? new Date() : this.props.date}
            mode='date'
            format='YYYY-MM-DD'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            onDateChange={dateValue => this.props.employeeUpdate({ prop: 'date', value: dateValue })}
          /> 
          </View>         
        </CardSection>
       
        <Divider style={{ backgroundColor: 'gray' }} />

        <CardSection>
        <Input
            label="Name"
            placeholder="Student Name"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
        />       
        </CardSection>
        
        <Divider style={{ backgroundColor: 'gray' }} />

        <CardSection>
        <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>Start From</Text>
          <DatePicker
            style={{ width: 100, paddingLeft: 5, flex: 2 }}
            date={this.props.start_time}
            mode='time'
            placeholder='select time'
            format='HH : mm'
            minuteInterval={10}
            minDate={'08 : 00'}
            maxDate={'16 : 30'}
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            onDateChange={value => this.props.employeeUpdate({ prop: 'start_time', value })}
          /> 
          </View>         
        </CardSection>
        <Divider style={{ backgroundColor: 'gray' }} />
        <CardSection>
        <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>End</Text>
          <DatePicker
            style={{ width: 100, paddingLeft: 5, flex: 2 }}
            date={this.props.end_time}
            mode='time'
            placeholder='select time'
            format='HH : mm'
            minuteInterval={10}
            minDate={'08 : 00'}
            maxDate={'16 : 30'}
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            onDateChange={value => this.props.employeeUpdate({ prop: 'end_time', value })}
          /> 
          </View>         
        </CardSection>
        <Divider style={{ backgroundColor: 'gray' }} />
        <CardSection>
          <View style={{ height: 100, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.labelStyle}>Description</Text>
          <TextInput
            style={{ flex: 2 }}
            placeholder="description......"
            multiline
            value={this.props.description}
            onChangeText={value => this.props.employeeUpdate({ prop: 'description', value })}
          />
          </View>
        </CardSection>


      </View>
    );
  }
}

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 320
  },
  buttonStyle: {
    paddingLeft: 5,
    flex: 2
  },
  buttonTextStyle: {
    fontSize: 18
  },
  dropdownTextStyle: {
    fontSize: 18,
    paddingLeft: 25
  },
  container: {
    backgroundColor: '#FFF',
    height: 200
},
content: {
    flexDirection: 'row',
    flexWrap: 'wrap'
},
images: {
    width: '33.3%',
    height: Dimensions.get('window').width / 3,
},
};

const mapStateToProps = (state) => {
  const { date, name, start_time, end_time, description } = state.employeeForm;
  return { date, name, start_time, end_time, description };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
