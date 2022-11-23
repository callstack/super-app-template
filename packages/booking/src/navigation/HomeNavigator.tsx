import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavBar from '../components/NavBar';
import UpcomingScreen from '../screens/UpcomingScreen';

export type HomeStackParamList = {
  Home: undefined;
  Upcoming: undefined;
};

const STANDALONE = Boolean(process.env.STANDALONE);

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: props => (STANDALONE ? <NavBar {...props} /> : null),
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Upcoming" component={UpcomingScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;
