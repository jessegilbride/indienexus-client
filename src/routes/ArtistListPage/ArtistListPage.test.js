import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import ArtistListPage from './ArtistListPage';

describe('ArtistListPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <MemoryRouter><ArtistListPage /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <MemoryRouter><ArtistListPage name="ArtistListPage" /></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});
