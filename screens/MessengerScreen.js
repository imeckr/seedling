import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default class MessengerScreen extends React.Component {
  state = {
    messages: [
      {
        _id: 1,
        text: "Hello Plant owner",
        createdAt: new Date()
      }
    ]
  };
render() {
    return (
      <View style={styles.container}>
        <GiftedChat messages={this.state.messages} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});