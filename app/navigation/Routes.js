/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Debit from '../screens/DebitStack/Debit';
import Profile from '../screens/Profile';
import Payments from '../screens/Payment';
import Credit from '../screens/Credit';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet} from 'react-native';
import {colorCode} from '../design/colors';
import {createStackNavigator} from '@react-navigation/stack';
import SpendingLimit from '../screens/DebitStack/SpendingLimit';

const Tab = createBottomTabNavigator();
const DebitStack = createStackNavigator();

function DebitStackScreen() {
  return (
    <DebitStack.Navigator headerMode="none">
      <DebitStack.Screen name="Debit" component={Debit} />
      <DebitStack.Screen name="Details" component={SpendingLimit} />
    </DebitStack.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Debit"
        tabBarOptions={{
          activeTintColor: colorCode.green,
          inactiveTintColor: colorCode.grey,
          labelStyle: {
            fontFamily: 'AvenirNextLTPro-Regular',
            fontSize: 12,
            fontWeight: '500',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/images/Home.png')}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Debit"
          component={DebitStackScreen}
          options={{
            tabBarLabel: 'Debit Card',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/images/Card.png')}
                style={styles.icon}
              />
            ),
          }}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.reset({
                index: 0,
                routes: [{name: 'Debit'}],
              });
            },
          })}
        />
        <Tab.Screen
          name="Payment"
          component={Payments}
          options={{
            tabBarLabel: 'Payments',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/images/Payments.png')}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Credit"
          component={Credit}
          options={{
            tabBarLabel: 'Credit',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/images/Credit.png')}
                style={styles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/images/user.png')}
                style={styles.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default Routes;
