import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BooksScreen, LoginScreen, RegisterScreen } from 'src/screens/index';
import { StackScreens, TabScreens } from './routes.types';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AuthNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name={StackScreens.REGISTER} component={RegisterScreen} />
			<Stack.Screen name={StackScreens.LOGIN} component={LoginScreen} />
		</Stack.Navigator>
	);
};

// const BooksNavigator = () => {};

// const DailyQuoteNavigator = () => {};

// const ReadingListNavigator = () => {};

// const QuotesNavigator = () => {};

export const MainNavigator = () => {
	return (
		<Tab.Navigator initialRouteName={TabScreens.BOOKS} screenOptions={{ headerShown: false }}>
			<Tab.Screen name={TabScreens.BOOKS} component={BooksScreen} />
		</Tab.Navigator>
	);
};
