
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import Todoscreen from './src/screen/TodoScreen';
import React from 'react';
import Fallback from './src/components/Fallback';

export default function App() {
  return (
    <SafeAreaView>
    <View>
      
      <Todoscreen></Todoscreen>
    
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
