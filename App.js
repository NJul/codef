import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The first line of text in the app.</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://codefinity-content-media-v2.s3.eu-west-1.amazonaws.com/courses/9cad8004-02f1-46b0-a31a-e39addcbc716/basic-concepts/react-native-logo.png',
        }}
        width={64}
        height={64}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FFAB',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    color: '#913f92',
  },
  image: {
    marginLeft: 10,
  },
});
