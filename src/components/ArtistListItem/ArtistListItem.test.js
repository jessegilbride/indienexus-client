import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import ArtistListItem from './ArtistListItem';

// import ArtistListContext from '../../contexts/ArtistListContext';
// static contextType = ArtistListContext;

/* import ArtistContext from '../../contexts/ArtistContext';
// contextType = ArtistContext;
const context = ArtistContext;

const artist = {
  id: 1,
  user_id:1,
  name: 'First test artist',
  bio: 'Vestibulum id ligula porta felis euismod semper.',
  tags: 'tag1, tag2',
  soundcloud_embed: '<div>soundcloud</div>',
  date_created: new Date('2029-01-22T16:28:32.615Z')
}

// this.context.setArtist(artist);
context.setArtist(artist); */

describe('ArtistListItem component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <MemoryRouter><ArtistListItem /></MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <MemoryRouter><ArtistListItem name="ArtistListItem" /></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});
