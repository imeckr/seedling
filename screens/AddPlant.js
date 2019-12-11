import React from 'react';
import { ScrollView, StyleSheet,Button,Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';


export default function AddPlantSreen(props) {
    return (
        <ScrollView style={styles.container}>
            {/**
             * Go ahead and delete ExpoLinksView and replace it with your content;
             * we just wanted to provide you with some helpful links.
             */}
            <Text style={styles.getStartedText}>  {JSON.stringify(props.navigation.getParam('otherParam', 'default value'))}</Text>

            <Button
                onPress={() => props.navigation.goBack()}
                title="Done"
            />

        </ScrollView>
    );
}

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
