import React, { Component, Fragment } from 'react';
import { Agenda } from 'react-native-calendars';
import { Divider, Header } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeesFetch, loginUser } from '../actions';
import ListItem from './ListItem';

class Calendar extends Component {
   state = {
          items: {}
        };
      

      componentWillMount() {
        //this.props.loginUser();

        this.props.employeesFetch();

        this.createData(this.props);
      }

      componentWillReceiveProps(nextProps) {
        this.createData(nextProps);
      }

      createData({ employees }) {
        const newItems = {};
        employees.forEach(element => {
          if (newItems[element.date] === undefined) {
            newItems[element.date] = [];
          }
          const pushItem = {
            date: element.date,
            name: element.name,
            start_time: element.start_time,
            end_time: element.end_time,
            description: element.description,
            uid: element.uid
          };
          newItems[element.date].push(pushItem);
        });

        console.log(newItems);

          this.setState({
            items: newItems
          });
      }

      loadItems(day) {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
            if (!this.state.items[strTime]) {
              this.state.items[strTime] = [];
            }
          }
          const newItems = {};
          Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
          this.setState({
            items: newItems
          });
        }, 1000);
        console.log(`Load Items for ${day.year}-${day.month}`);
      }
    
    
      rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
      }
    
      timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }

      renderEmptyDate() {
        return (
          <Divider style={{ backgroundColor: 'gray' }} />
        );
      }

      renderItem(employee) {
        return (
        <ListItem employee={employee} />
        );
      }

      render() {
        return (
          <Fragment>
          <Header
            centerComponent={{ text: 'Calendar', style: { color: '#fff', fontSize: 18 } }}
            rightComponent={{ icon: 'add', color: '#fff', onPress: () => Actions.employeeCreate() }}
          />
          <Agenda
            items={this.state.items}
            loadItemsForMonth={this.loadItems.bind(this)}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}        
          />
          </Fragment>
        );
      }
    }

const mapStateToProps = state => {
      const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
      });
    
      return { employees };
    };
    
export default connect(mapStateToProps, { employeesFetch, loginUser })(Calendar);
