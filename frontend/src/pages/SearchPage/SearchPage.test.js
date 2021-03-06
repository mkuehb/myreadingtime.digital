import React from 'react';
import { render } from '../../test/utils';
import SearchPage from './SearchPage';

describe('SearchPage', () => {
  test('renders input field with default text', () => {
    const { getByPlaceholderText } = render(<SearchPage />);
    expect(getByPlaceholderText('Harry Potter')).toBeInTheDocument();
  });
});
