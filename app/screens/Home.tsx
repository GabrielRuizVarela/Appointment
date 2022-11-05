import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Factory, Button } from 'native-base';

const FactoryView = Factory(View);
const FactoryImageBackground = Factory(ImageBackground);

function Home() {
  return (
    <>
      <FactoryImageBackground
        source={require('../assets/bg-home.jpg')}
        w="100%"
        h="100%"
        bottom="10%"
        zIndex="0"
      />
      <FactoryView
        bgColor="#000"
        opacity="0.4"
        w="100%"
        h="100%"
        position="absolute"
        zIndex="1"
      />
      <FactoryView
        bgColor="#adadad"
        w="100%"
        h="10%"
        position="absolute"
        bottom="0"
        zIndex="2"
      >
        <Button p={5}
          variant="subtle"
          colorScheme="secondary"
        >
          Sign in 
        </Button>
      </FactoryView>
    </>
  );
}

export default Home;
