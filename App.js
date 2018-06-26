import React from 'react';
import {StyleSheet, Text, View, StatusBar, Button, Alert } from 'react-native';

export default class App extends React.Component {
    onButtonPress() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#0f0"
                           barStyle="light-content" translucent={true}/>
                <Text style={styles.text}>Hello World!!</Text>
                <Button title="Press Me" onPress={this.onButtonPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000'
    }
});
