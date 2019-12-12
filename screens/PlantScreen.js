import React, { Component } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, View, } from 'react-native';

class PlantScreen extends Component {
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

    onChangeText = (text) => {
        this.setState({
            searchInput: text,
            results: null
        })
    }

    render() {
        const { searchInput, results } = this.state

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    {/**
                     * Go ahead and delete ExpoLinksView and replace it with your content;
                     * we just wanted to provide you with some helpful links.
                     */}
                    <View stye={styles.welcomeContainer}>
                        <Image
                            source={{ uri: this.props.navigation.getParam('image', 'https://cb2.scene7.com/is/image/CB2/PottedMonsteraPlantSHS19') }}
                            style={styles.welcomeImage}
                        />
                    </View>
                    <View style={{ height: 20 }}/>
                    <View style={styles.container}>
                        <Text style={styles.name}>
                            {this.props.navigation.getParam('name', 'default value')}
                        </Text>
                    </View>

                    {/*<Button*/}
                    {/*    onPress={() => this.props.navigation.goBack()}*/}
                    {/*    title="Done"*/}
                    {/*/>*/}
                </ScrollView>
            </View>
        )
    }
}

export default PlantScreen
PlantScreen.navigationOptions = {
    title: 'Plant',
};

const styles = StyleSheet.create({
    name: {
        fontWeight: '900',
        marginBottom: 20,
        color: 'rgba(0,0,0,0.8)',
        fontSize: 18,
        lineHeight: 19,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    wrapper: { flex: 1 },
    plantImage: {
        width: 150,
        height: 150,
        borderRadius: 99,
        resizeMode: 'contain',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',

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