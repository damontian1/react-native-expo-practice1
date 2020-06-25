import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function Navigation({ navigation }) {
  return (
    <View style={tailwind('bg-gray-200 flex flex-row w-full h-12 items-center justify-around')}>
      <View style={tailwind('mr-2 bg-gray-200')}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={tailwind('uppercase font-bold text-xs py-3')}>
          Home
        </Text>
      </View>
      <View style={tailwind('mr-2 bg-gray-200')}>
        <Text
          onPress={() => navigation.navigate('Profile')}
          style={tailwind('uppercase font-bold text-xs py-3')} >
          Profile
        </Text>
      </View>
    </View>
  );
}
