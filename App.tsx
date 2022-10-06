import React, { useEffect, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import { AuthNavigator, MainNavigator } from 'src/navigation/MainNavigator';

type User = FirebaseAuthTypes.User | null;

const App = () => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState<User>();

	const onAuthStateChanged = (userFirebase: User) => {
		setUser(userFirebase);

		if (initializing) {
			setInitializing(false);
		}
	};

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	if (initializing) {
		return null;
	}

	return (
		<NativeBaseProvider>
			<NavigationContainer>{!user ? <AuthNavigator /> : <MainNavigator />}</NavigationContainer>
		</NativeBaseProvider>
	);
};

export default App;
