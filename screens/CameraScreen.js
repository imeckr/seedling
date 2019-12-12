import React, { Component } from 'react';
import { Button, Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Camera } from 'expo-camera';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

class CameraScreen extends Component {


    constructor(props) {
        super(props)
        this.state = {
            searchInput: 'search',
            image: null,
        }
    }

    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */

    async componentDidMount() {
        Camera.requestPermissionsAsync();
    }

    takePicture = async () => {
        console.log('takePicture!');
        const pic = this.camera.takePictureAsync(data => {
            console.log(data.uri)
            this.onPictureSaved(data);

        })

    }
    onPictureSaved = async photo => {
        this.setState({ image: photo });
        // more load here
    }

    render() {

        const { searchInput, results } = this.state

        return (
            <View style={styles.container}>
                <View>
                    <Camera
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                    />
                </View>

                {/*<ScrollView*/}
                {/*    style={styles.container}*/}
                {/*    contentContainerStyle={styles.contentContainer}>*/}

                {/*    {results ?*/}
                {/*        <ResultsSection/> :*/}
                {/*        <TrendingSection/>*/}
                {/*    }*/}

                {/*</ScrollView>*/}

                <View style={styles.welcomeContainer}>

                    <Button
                        title="Take Picture"
                        onPress={() => this.takePicture()}
                        style={{ backgroundColor: 'green', width: 200, height: 50 }}
                    />
                </View>
            </View>
        )
    }
}

export default CameraScreen
CameraScreen.navigationOptions = {
    title: 'Camera',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
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
        width: 150,
        height: 150,
        borderRadius: 99,
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