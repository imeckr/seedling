import React from 'react';

import { Button, Image, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import * as firebase from 'firebase';

export default class PlantDetectScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commonName: null,
            familyName: null,
            isLoading: false,
            uploadedImage: this.props.navigation.getParam('photoPath'),
            similarImages: [],
            titleInput: 'Title',
            descriptionInput: 'Description'
        }
    }

    submit = () => {
        firebase.database().ref('users/' + '249ht8f927hg9ß2gh9hg/plants').push({
            title: this.state.titleInput,
            description: this.state.descriptionInput,
            image: this.state.uploadedImage

        }, () => this.props.navigation.navigate('Profile'))
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

    componentDidMount() {
        const formData = new FormData();
        let apiUrl = 'https://my-api.plantnet.org/v2/identify/all?api-key=2a10YRjMkq5dmzIYeHrJbsTe&include-related-images=true';
        let localUri = this.state.uploadedImage;
        let filename = localUri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;


        var storageRef = firebase.storage().ref('249ht8f927hg9ß2gh9hg').child('temp');


        formData.append('organs', 'leaf');
        formData.append('images', { uri: localUri, name: filename, type });

        let options = {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        };

        return fetch(apiUrl, options)
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                        titleInput: responseJson.results[0].species.commonNames[0],
                        descriptionInput: responseJson.results[0].species.family.scientificNameWithoutAuthor
                    },
                    function () {
                    }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        const { uploadedImage } = this.state
        const { titleInput, descriptionInput } = this.state
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    {uploadedImage ? <Image
                        source={{ uri: uploadedImage }}
                        style={styles.welcomeImage}
                    /> : null}
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
                    <View style={styles.container}>
                        <Text style={styles.name}>
                            {this.state.commonName}
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.credits}>
                            {this.state.familyName}
                        </Text>
                    </View>
                    <Button
                        onPress={this.submit}
                        title="Done"
                    />
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    credits: {
        fontWeight: '800',
        marginBottom: 20,
        color: 'green',
        fontSize: 18,
        lineHeight: 19,
        textAlign: 'center',
    },
    name: {
        fontWeight: '900',
        marginBottom: 20,
        color: 'rgba(0,0,0,0.8)',
        fontSize: 18,
        lineHeight: 19,
        textAlign: 'center',
    },
    title: {
        fontWeight: '900',
        marginBottom: 20,
        color: 'rgba(0,0,0,0.8)',
        fontSize: 18,
        lineHeight: 19,
        paddingLeft: 20,
        textAlign: 'left',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 200,
        height: 200,

        resizeMode: 'contain',

    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
