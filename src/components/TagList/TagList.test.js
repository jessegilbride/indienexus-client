import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import TagList from './TagList';

// package.JSON for ignoring a test: 
/* "test": "react-scripts test --testPathIgnorePatterns=<path>" */

describe('TagList component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <MemoryRouter><TagList /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <MemoryRouter><TagList name="TagList" /></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});