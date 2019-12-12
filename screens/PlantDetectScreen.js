import React from 'react';

import {
    Text,
    ScrollView,
    StyleSheet, View, Image, Platform
} from 'react-native';


export default class PlantDetectScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          commonName:null,
          familyName: null,
          isLoading: false,
          uploadedImage : this.props.navigation.getParam('photoPath'),
          similarImages : []
      }
  }

  componentDidMount() {
    const formData = new FormData();
    let apiUrl = 'https://my-api.plantnet.org/v2/identify/all?api-key=2a10YRjMkq5dmzIYeHrJbsTe&include-related-images=true';
    let localUri = this.props.navigation.getParam('photoPath');
    let filename = localUri.split('/').pop();
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

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
            commonName: responseJson.results[0].species.commonNames[0],
            familyName: responseJson.results[0].species.family.scientificNameWithoutAuthor
          },
          function() {
              console.log(responseJson.results[0]);
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
      return (
          <View style={styles.container}>
              <ScrollView
                  style={styles.container}
                  contentContainerStyle={styles.contentContainer}>
                  <View style={styles.welcomeContainer}>
                      <Image
                          source={this.state.uploadedImage}
                          style={styles.welcomeImage}
                      />
                  </View>
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
