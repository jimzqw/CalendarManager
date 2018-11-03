import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Images extends Component {

    render() {
        const IconColor = this.props.focused
        ? this.props.activeTintColor
        : this.props.inactivetintColor;

        return (
        <View style={styles.containerStyle} >
            <Icon 
                name={this.props.iconName} 
                type={this.props.iconType} 
                color={IconColor}
                size={28} 
            />
            
        </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center', 
        alignSelf: 'center'
    }
};
