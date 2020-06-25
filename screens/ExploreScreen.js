import React from 'react';
import { Text, View, Button, SafeAreaView, Image } from 'react-native';
import tailwind from 'tailwind-rn';

function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView style={tailwind("flex-1 mx-4 my-12")} >
      <View style={tailwind("mt-8")}>
        <Text style={tailwind("text-2xl font-extrabold")}>What can we help you find?</Text>
        <View style={tailwind("flex flex-row")}>
          <View style={tailwind("border border-gray-500 w-48 mr-4")}>
            <Image
              source={require("../assets/house1.jpg")}
              style={tailwind("w-full h-32")}
            />
            <Text style={tailwind("text-base p-4")}>Homes</Text>
          </View>
          <View style={tailwind("border border-gray-500 w-48")}>
            <Image
              source={require("../assets/house2.jpg")}
              style={tailwind("w-full h-32")}
            />
            <Text style={tailwind("text-base p-4")}>Luxury</Text>
          </View>
        </View>
      </View>

      <View style={tailwind("mt-8")}>
        <Text style={tailwind("text-2xl font-extrabold mb-2")}>Introducing Airbnb Plus</Text>
        <Text style={tailwind("text-base mb-4")}>A new selection of homes verified for quality & comfort</Text>
        <View style={tailwind("")}>
          <Image
            source={require("../assets/house3.jpg")}
            style={tailwind("w-full h-48")}
          />
          <Text style={tailwind("text-base p-4")}>Homes</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ExploreScreen;