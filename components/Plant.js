import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

export default function Plant(props) {


    return (
        <View style={styles.container}>
            <View stye={styles.wrapper}>
                <Image
                    source={{ uri: props.image }}
                    style={styles.plantImage}
                />
            </View>
            <View style={{ width: 15 }}/>
            <View stye={styles.wrapper}>
                <Text stye={styles.text}>
                    {props.name}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginLeft: 40,
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    wrapper: { flex: 1 },

    text: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.8)',
        fontSize: 22,
        lineHeight: 19,
        textAlign: 'center',
    },
    textWrapper: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: 'khaki'
    },
    imageWrapper: {},
    plantImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
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