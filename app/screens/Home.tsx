import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import { Factory, Button } from 'native-base';

const FactoryView = Factory(View);
const FactoryImageBackground = Factory(ImageBackground);

function Home({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <FactoryImageBackground
          source={require('../assets/bg-home.jpg')}
          w="100%"
          h="100%"
          zIndex="0"
        >

        <FactoryView
          bgColor="#000"
          opacity="0.4"
          w="100%"
          h="100%"
          // position="absolute"
          // zIndex="1"
        />
        </FactoryImageBackground>
        <FactoryView
          bgColor="#adadad"
          w="100%"
          h="10%"
          position="absolute"
          bottom="0"
          zIndex="2"
        >
          <Button
            p={5}
            variant="subtle"
            colorScheme="secondary"
            onPress={() => navigation.navigate('Calendar')}
          >
            Sign in
          </Button>
        </FactoryView>
      </SafeAreaView>
    </>
  );
}

export default Home;
