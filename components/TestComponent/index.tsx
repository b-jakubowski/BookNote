import { StyleSheet, Text, View } from 'react-native';

export default function TestComponent() {
	return (
		<View style={styles.container}>
			<Text>TestComponent</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 200,
		height: 200,
		backgroundColor: 'red',
	},
});
