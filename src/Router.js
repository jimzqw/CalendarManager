import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import TabIcon from './components/TabIcon';
import Calendar from './components/Calendar';
import Settings from './components/Settings';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>    

        <Scene key="login" component={LoginForm} title="Login" />

        <Scene key="main" title='holder' rightTitle='Add' onRight={() => Actions.employeeCreate()} hideNavBar>
          <Scene key='tabs' tabs={true} labelStyle={{ fontSize: 15 }} activeTintColor='#0080ff'>
          <Scene
            key="employeeList"
            component={Calendar}
            title="Calendar"
            icon={TabIcon}
            iconName='calendar'
            iconType='feather'
            hideNavBar
          />
          <Scene
            title='Settings'
            key="rightTab"
            component={Settings}
            icon={TabIcon}
            iconName='settings'
            iconType='feather'
            hideNavBar
          />
          </Scene>
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" rightTitle='' />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" rightTitle='' />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
