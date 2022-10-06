module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					'src/tests': ['./src/tests/'],
					'src/components': './src/components',
					'src/screens': './src/screens',
					'src/navigation': './src/navigation',
				},
			},
		],
	],
};
