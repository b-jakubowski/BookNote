import React from 'react';
import { render } from '@testing-library/react-native';
import TestComponent from '.';

describe('Button', () => {
	it('should match snapshot', () => {
		expect(render(<TestComponent />).toJSON()).toMatchSnapshot();
	});
});
