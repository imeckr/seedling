import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function MessengerScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

MessengerScreen.navigationOptions = {
  title: 'Messenger',
};
