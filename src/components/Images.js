import React, { Component } from 'react';
import { ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { PhotoButton } from './common';

let images = [];

export default class Images extends Component {
    state = {
        imageSource: [],
      };


    selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = response.uri;
    
            // You can also display the image using data:
            //let source = { uri: 'data:image/jpeg;base64,' + response.data };
                
                //AsyncStorage.setItem('images', JSON.stringify(images));
                images.push(source);
            
                this.setState({
                    imageSource: images
                });       
          }
        });
      }


    render() {
        return (           
            <ScrollView 
                style={styles.container}
                contentContainerStyle={styles.content}
            >
            {this.state.imageSource.map((source, i) => (
                
                <Image key={i} source={{ uri: source }} style={styles.images} />
            ))}
            
            <PhotoButton onPress={this.selectPhotoTapped.bind(this)} >
                Select a photo
            </PhotoButton>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
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
});
