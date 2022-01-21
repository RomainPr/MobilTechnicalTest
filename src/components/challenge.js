import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Challenge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Challenge #1</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/email2.png')} />
      </View>
      <Text style={styles.metric}>3Wh</Text>
      <Text style={styles.goal}>Envoyer un email de 1Mo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#92B2BD',
    marginBottom: 15,
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  metric: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0C5266',
  },
  goal: {
    textAlign: 'center',
    fontSize: 28,
    color: '#0C5266',
  },
});

export default Challenge;

//   metric: {
//     textAlign: 'center',
//     color: '#0C5266',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   goal: {
//     color: '#0C5266',
//     fontSize: 24,
//   },
// });

// export default Challenge;
