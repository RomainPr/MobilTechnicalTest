import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Resistance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resistance</Text>
      <View style={styles.measuresContainer}>
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measures} />
        <View style={styles.measuresBig} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
        <View style={styles.measuresInactive} />
      </View>
      <View style={styles.measuresMetricContainer}>
        <Text style={styles.measuresMetric}>6.3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginTop: 30,
    marginBottom: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#A9B6BD',
    marginBottom: 15,
  },
  measuresContainer: {
    position: 'relative',
    flexDirection: 'row',
  },
  measures: {
    width: 8,
    height: 40,
    borderRadius: 5,
    marginRight: 4,
    backgroundColor: '#FB836A',
  },
  measuresBig: {
    position: 'relative',
    top: -5,
    width: 8,
    height: 50,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: '#FB836A',
  },
  measuresInactive: {
    width: 8,
    height: 40,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: '#E7EEF1',
  },
  measuresMetricContainer: {
    position: 'absolute',
    left: 195,
    top: 88,
  },
  measuresMetric: {
    fontSize: 18,
    color: '#FB836A',
    fontWeight: 'bold',
  },
});

export default Resistance;
