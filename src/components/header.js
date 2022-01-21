import React from 'react';
import {Text, Pressable, StyleSheet, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>00:31:23</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Stop</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0C5266',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    width: 100,
    borderRadius: 30,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
