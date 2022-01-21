import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Metrics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.metricBoxContainer}>
        <View style={styles.metricBox}>
          <Text style={styles.metricText}>7W</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricText}>
            12<Text style={styles.metricUnit}>km/h</Text>
          </Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricText}>
            83<Text style={styles.metricUnitRpm}>rpm</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metricBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    marginTop: 15,
  },
  metricBox: {
    width: 115,
    marginRight: 12,
    backgroundColor: '#D6EE45',
    borderRadius: 5,
    padding: 20,
  },
  metricText: {
    textAlign: 'center',
    color: '#0C5266',
    fontSize: 24,
    fontWeight: 'bold',
  },
  metricUnit: {
    fontSize: 14,
  },
  metricUnitRpm: {
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export default Metrics;
