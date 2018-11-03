import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { date, name, start_time, end_time, description } = this.props;
    const { uid } = this.props.employee;
    this.props.employeeSave({ date, name, start_time, end_time, description, uid });
  }


  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Fragment>
      <Header
        leftComponent={{ icon: 'keyboard-backspace', color: '#fff', onPress: () => Actions.tabs() }}
        centerComponent={{ text: 'Edit', style: { color: '#fff', fontSize: 18 } }}
      />
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>


        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { date, name, start_time, end_time, description } = state.employeeForm;

  return { date, name, start_time, end_time, description };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);
