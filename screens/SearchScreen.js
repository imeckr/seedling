import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, TextInput, View, } from 'react-native';
import TrendingSection from '../components/TrendingSection';
import ResultsSection from '../components/ResultsSection';

class SearchScreen extends Component {
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

                <TextInput
                    style={{ height: 40, paddingLeft: 10, borderColor: 'gray', margin: 10, borderWidth: 1 }}
                    onChangeText={text => this.onChangeText(text)}
                    value={searchInput}

                />


                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>

                    {results ?
                        <ResultsSection/> :
                        <TrendingSection/>
                    }

                </ScrollView>


                <View style={styles.tabBarInfoContainer}>

                </View>
            </View>
        )
    }
}

export default SearchScreen
SearchScreen.navigationOptions = {
    title: 'Search',
};

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
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
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