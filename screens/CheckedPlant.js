import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import * as firebase from 'firebase';


class AddPlantSreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleInput: 'Title',
            descriptionInput: 'Description'
        }
    }



    onChangeTitleInput = (text) => {
        this.setState({
            titleInput: text,

        })
    }
    onChangeDescriptionInput = (text) => {
        this.setState({
            descriptionInput: text,

        })
    }
    render() {
        const { titleInput,descriptionInput } = this.state
        return (
            <ScrollView style={styles.container}>
                {/**
                 * Go ahead and delete ExpoLinksView and replace it with your content;
                 * we just wanted to provide you with some helpful links.
                 */}
                <TextInput
                    style={{ height: 40, paddingLeft: 10, borderColor: 'gray', margin: 10, borderWidth: 1 }}
                    onChangeText={text => this.onChangeTitleInput(text)}
                    value={titleInput}

                />
                <TextInput
                    style={{ height: 40, paddingLeft: 10, borderColor: 'gray', margin: 10, borderWidth: 1 }}
                    onChangeText={text => this.onChangeDescriptionInput(text)}
                    value={descriptionInput}

                />
               

            </ScrollView>
        );
    }
}

export default AddPlantSreen
AddPlantSreen.navigationOptions = {
    title: 'Add Plant',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
});
