import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import ArtistCreatePage from './ArtistCreatePage';

describe('ArtistCreatePage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <MemoryRouter><ArtistCreatePage /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <MemoryRouter><ArtistCreatePage name="ArtistCreatePage" /></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});
