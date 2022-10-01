module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true,
		'jest/globals': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['react', 'react-native', 'react-hooks', '@typescript-eslint', 'jest', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'no-empty-function': 0,
		'@typescript-eslint/no-empty-function': 0,
		'react-hooks/exhaustive-deps': 'off',
		'react/react-in-jsx-scope': 'off',
	},
};
