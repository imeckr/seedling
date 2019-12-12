import React from 'react';

import {
    Text,
    ScrollView,
    StyleSheet } from 'react-native';


export default class PlantDetectScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          species:null,
          isLoading: false,
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
            species: responseJson.results[0].species
          },
          function() {
              console.log(responseJson.results[0].species);
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
      return (
          <ScrollView style={styles.container}>
              {/**
               * Go ahead and delete ExpoLinksView and replace it with your content;
               * we just wanted to provide you with some helpful links.
               */}
              <Text>{this.state.species ? JSON.stringify(this.state.species ): null}</Text>
          </ScrollView>
      );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
