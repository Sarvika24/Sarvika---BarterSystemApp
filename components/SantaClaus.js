import React from 'react';
import LottieView from 'lottie-react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/13015-santa-claus.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}

/**
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import dictonary from './localdb';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      definition: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Dictonary App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://img.icons8.com/bubbles/2x/books.png',
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ definition: dictonary[this.state.text].definition });
          }}>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableOpacity>
       <Text style={styles.meaning}>{this.state.definition}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginTop : 30,
    marginLeft: 95,
  },
  meaning :{
    fontSize : 20,
    marginLeft: 10,
    marginTop : 10,
    alignSelf : 'center',
    alignContent : 'center'
  }
});
 */