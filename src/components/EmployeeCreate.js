import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { employeeCreate, bagRefresh } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.bagRefresh();
  }

  onButtonPress() {
    const { date, name, start_time, end_time, description } = this.props;
    this.props.employeeCreate({ date, name, start_time, end_time, description });
  }

  render() {
    return (
      <Fragment>
      <Header
        leftComponent={{ icon: 'keyboard-backspace', color: '#fff', onPress: () => Actions.tabs() }}
        centerComponent={{ text: 'Create', style: { color: '#fff', fontSize: 18 } }}
      />
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
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
   employeeCreate, bagRefresh
})(EmployeeCreate);
