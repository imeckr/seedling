import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Button, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Plant from '../components/Plant';
import * as firebase from 'firebase';

class ProfileScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: 'test',
            plants: null

        }
    }


    componentDidMount() {
        fetch('http://192.168.178.82:5000/trending')
            .then(response => response.json())
            .then(data => this.setState({ data }));

        let ref = firebase.database().ref('users/' + '249ht8f927hg9ß2gh9hg/plants');
        ref.on('value', (snapshot) => {
            console.log(snapshot.val())
            let arr = []
            snapshot.forEach(plant => {
                arr.push({
                    ...plant.val(),
                    id: plant.key
                })
            })
            console.log(arr)

            arr.map(i => {
                console.log(i)
            })

            this.setState({
                plants: arr
            })

        });

    }


    render() {
        const { data, plants } = this.state
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={require('../assets/images/profpic.jpg')}
                            style={styles.welcomeImage}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.name}>
                            Andy Meddows
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.credits}>

                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            My Plants
                        </Text>

                        {plants && plants.length > 0 ?
                            plants.map((plant) => {
                                return (<TouchableOpacity key={plant.key} activeOpacity={0.8}
                                                          onPress={() => this.props.navigation.navigate('PlantScreen', {
                                                              name: plant.title,
                                                              image: plant.image,
                                                              description: plant.description,
                                                          })}>
                                    <Plant id={plant.id}  key={plant.id} name={plant.title} image={plant.image}
                                           description={plant.description}/>
                                </TouchableOpacity>)
                            }) :
                            null}
                    </View>
                    <View style={styles.welcomeContainer}>
                        <Button
                            title="Add Plant"
                            onPress={() => this.props.navigation.navigate('Camera', {
                                itemId: 86,
                                otherParam: 'anything you want here',
                            })}
                            style={{ backgroundColor: 'green', width: 200, height: 50 }}
                        />
                    </View>
                    {/*<View style={styles.welcomeContainer}>*/}
                    {/*    <Button*/}
                    {/*        title="Discover"*/}
                    {/*        onPress={() => this.props.navigation.navigate('Discover', {*/}
                    {/*            itemId: 86,*/}
                    {/*            otherParam: 'anything you want here',*/}
                    {/*        })}*/}
                    {/*    />*/}
                    {/*</View>*/}


                </ScrollView>

                {/*<View style={styles.tabBarInfoContainer}>*/}
                {/*    <Text style={styles.tabBarInfoText}>*/}
                {/*        This is a tab bar. You can edit it in:*/}
                {/*    </Text>*/}

                {/*    <View*/}
                {/*        style={[styles.codeHighlightContainer, styles.navigationFilename]}>*/}
                {/*        <MonoText style={styles.codeHighlightText}>*/}
                {/*            navigation/MainTabNavigator.js*/}
                {/*        </MonoText>*/}
                {/*    </View>*/}
                {/*</View>*/}
            </View>
        );
    }


}

ProfileScreen.navigationOptions = {
    header: null,
};

export default ProfileScreen

function DevelopmentModeNotice() {
    if (__DEV__) {
        const learnMoreButton = (
            <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
                Learn more
            </Text>
        );

        return (
            <Text style={styles.developmentModeText}>
                Development mode is enabled: your app will be slower but you can use
                useful development tools. {learnMoreButton}
            </Text>
        );
    } else {
        return (
            <Text style={styles.developmentModeText}>
                You are not in development mode: your app will run at full speed.
            </Text>
        );
    }
}

function handleLearnMorePress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/workflow/development-mode/'
    );
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
    );
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
