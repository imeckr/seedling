import React, { Component } from 'react';
import { Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity, View, } from 'react-native';
import PlantResult from '../components/PlantResult';
import Plant from '../components/Plant';

class SearchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }

    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */


    componentDidMount() {
        fetch('http://192.168.178.84:8080/search')
            .then(response => response.json())
            .then(results => {
                    this.setState({ results:results.users })
                }
            )
    }

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

                    {results && results.length > 0 ?
                        results.map(plant => {
                            return <TouchableOpacity key={plant.key} activeOpacity={0.8}
                                                     onPress={() => this.props.navigation.navigate('GeneralPlantScreen', {
                                                         name: plant.plant.name,
                                                         image: 'http://192.168.178.84:8080' + plant.plant.img,
                                                         description: plant.plant.description,
                                                         user: plant.user_name,
                                                         userPlant:true
                                                     })}>
                                <PlantResult
                                    name={plant.plant.name}
                                    description={plant.plant.description}
                                    image={'http://192.168.178.84:8080' + plant.plant.img}
                                />
                            </TouchableOpacity>
                        }) : null
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