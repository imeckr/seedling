import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import * as firebase from 'firebase';


class CheckedPlant extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleInput: 'Title',
            descriptionInput: 'Description',
            healthState:"..."
        }
    }

    componentDidMount() {
        return fetch("http://10.11.15.0:8080/predict")
            .then(response => response.json())
            .then(responseJson => {this.setState({healthState:responseJson})})
    }

    submit = () => {
        firebase.database().ref('users/' + "249ht8f927hg9ß2gh9hg/plants").push({
            title:this.state.titleInput,
            description:this.state.descriptionInput,
            image: 'https://cb2.scene7.com/is/image/CB2/PottedMonsteraPlantSHS19'

        },() => this.props.navigation.goBack())
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
                {/*<TextInput*/}
                {/*    style={{ height: 40, paddingLeft: 10, borderColor: 'gray', margin: 10, borderWidth: 1 }}*/}
                {/*    onChangeText={text => this.onChangeTitleInput(text)}*/}
                {/*    value={titleInput}*/}

                {/*/>*/}
                {/*<TextInput*/}
                {/*    style={{ height: 40, paddingLeft: 10, borderColor: 'gray', margin: 10, borderWidth: 1 }}*/}
                {/*    onChangeText={text => this.onChangeDescriptionInput(text)}*/}
                {/*    value={descriptionInput}*/}

                {/*/>*/}
                <Text style={styles.name}>{JSON.stringify(this.state.healthState)}</Text>


            </ScrollView>
        );
    }
}

export default CheckedPlant
CheckedPlant.navigationOptions = {
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
