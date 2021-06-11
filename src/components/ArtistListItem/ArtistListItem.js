import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NiceDate } from '../Utils/Utils';
import './ArtistListItem.css';

export default class ArtistListItem extends Component {
  render() {
    /* id, name, bio, soundcloud_embed, tags, date_created */
    const { artist } = this.props;
    // console.log(artist);
    return (
      <Link to={`/artist/${artist.id}`} className='ArtistListItem'>
        <header className='ArtistListItem__header'>
          <h3 className='ArtistListItem__heading'>{artist.name}</h3>
        </header>
        <div className='ArtistListItem__footer'>
          {/* <div><ArtistTags artist={artist} /></div> */}
          <div><ArtistDate artist={artist} /></div>
        </div>
      </Link>
    );
  }
}

ArtistListItem.defaultProps = {
  artist: {}
}

/* function ArtistTags({ artist }) {
  return (
    <span className=''>
      Tags: {artist.tags}
    </span>
  );
} */

function ArtistDate({ artist }) {
  return (
    <span className='ArtistListItem__date'>
      Joined: <NiceDate date={artist.date_created} />
    </span>
  );
}

