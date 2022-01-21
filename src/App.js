/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';

import Header from './components/header';
import Challenge from './components/challenge';
import ProgressBar from './components/progressBar';
import Metrics from './components/metrics';
import Resistance from './components/resistance';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#0C5266" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View style={styles.contentSection}>
          <Challenge />
          <ProgressBar />
          <Metrics />
        </View>
        <Resistance />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentSection: {
    backgroundColor: '#f2f2f2',
    paddingBottom: 30,
  },
});

export default App;
