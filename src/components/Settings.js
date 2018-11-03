import React, { Component, Fragment } from 'react';
import { List, ListItem, Header } from 'react-native-elements';

const list = [
    {
        title: 'Login',
        icon: 'login'
    },
    {
        title: 'Log out',
        icon: 'log-out'
    }
];

let item = {};

export default class Settings extends Component {
    state={ login: false };

    buttonPressed() {
        this.setState({
            login: !this.state.login
        }, () => console.log(this.state.login));
    }

    render() {
        if (this.state.login === false) {
            item = list[0];
        } else if (this.state.login === true) {
            item = list[1];
        }
        return (
            <Fragment>
            <Header
                centerComponent={{ text: 'Settings', style: { color: '#fff', fontSize: 18 } }}
            />
            <List>
                <ListItem
                    key={item.title}
                    title={item.title}
                    leftIcon={{ name: item.icon, type: 'entypo' }}
                    onPress={this.buttonPressed.bind(this)}
                />
            </List>
            </Fragment>
        );
    }
}
