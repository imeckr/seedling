import React, { Component } from 'react';
import { Button, Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

class HealthScreen extends Component {


    constructor(props) {
        super(props)
        this.state = {
            searchInput: 'search'
        }
    }

    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */

    async componentDidMount() {
        await Camera.requestPermissionsAsync();

    }

    startCheck =  () => {

    }

    render() {

        const { searchInput, results } = this.state

        return (
            <View style={styles.container}>


                {/*<ScrollView*/}
                {/*    style={styles.container}*/}
                {/*    contentContainerStyle={styles.contentContainer}>*/}

                {/*    {results ?*/}
                {/*        <ResultsSection/> :*/}
                {/*        <TrendingSection/>*/}
                {/*    }*/}

                {/*</ScrollView>*/}


                <Text style={styles.name}>
                    GET A HEALTH CHECK
                </Text>
                <Text style={styles.name}>
                    FOR YOUR PLANT
                </Text>
                <Button
                    title="Take Picture"
                    onPress={() =>      this.props.navigation.navigate('Camera')}
                    style={{ backgroundColor: 'green', width: 200, height: 50 }}
                />

            </View>
        )
    }
}

export default HealthScreen
HealthScreen.navigationOptions = {
    title: 'Health',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
