import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/lib/ReactTestUtils'
import SearchBar from '../../../components/search-bar/search-bar';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    var searchBar = TestUtils.renderIntoDocument(<SearchBar />);
    expect(searchBar).toBeTruthy();
  });
});
