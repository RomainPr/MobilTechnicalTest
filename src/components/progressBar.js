import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.metric}>1.2Wh</Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBar}>
          <View style={styles.background}>
            <Image
              style={styles.invalidName}
              source={require('../assets/images/invalidName.png')}
            />
          </View>
        </View>
        <Image source={require('../assets/images/angleUpDuotone.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  metric: {
    position: 'relative',
    left: 132,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0C5266',
  },
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: 350,
    height: 40,
    alignSelf: 'center',
    marginRight: 10,
    borderRadius: 5,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderStyle: 'solid',
    borderColor: '#A9E6F9',
  },
  background: {
    position: 'relative',
    width: 140,
    height: 37,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#83DDFA',
  },
  invalidName: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
});

export default ProgressBar;
