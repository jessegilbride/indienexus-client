import React, { Component } from 'react';
import ArtistContext from '../../contexts/ArtistContext';
import ArtistApiService from '../../services/artist-api-service';
import { NiceDate } from '../../components/Utils/Utils';
import './ArtistPage.css';

export default class ArtistPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = ArtistContext;

  componentDidMount() {
    const { artistId } = this.props.match.params;
    this.context.clearError();

    ArtistApiService.getArtist(artistId)
      .then(this.context.setArtist)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearArtist();
  }

  // name, bio, soundcloud_embed, tags, date_created
  renderArtist() {
    const { artist } = this.context;

    /* function ArtistTags({ artist }) {
      return (
        <span className=''>Tags: {artist.tags}</span>
      );
    } */

    function ArtistBio() {
      return <div className='artist-bio'>{artist.bio}</div>;
    }

    function AudioEmbed() {
      // const cleanedUpEmbed = artist.soundcloud_embed.replace(/&lt;/g, '<');
      artist.soundcloud_embed = artist.soundcloud_embed.replace(/&lt;/g, '<');
      artist.soundcloud_embed = artist.soundcloud_embed.replace(/&gt;/g, '>');
      // console.log(artist.soundcloud_embed)

      // return <div dangerouslySetInnerHTML={{__html: cleanedUpEmbed}} className='audio-embed' />;
      return <div dangerouslySetInnerHTML={{__html: artist.soundcloud_embed}} className='audio-embed' />;
    }

    return (
      <>
        <header className="profile-header">
          <h2>{artist.name}</h2>
        </header>

        <p>
          Joined: <NiceDate date={artist.date_created} />
        </p>

        <h3>Artist bio</h3>
        <ArtistBio />

        {/* <p>
          <ArtistTags artist={artist} />
        </p> */}
        {/* <p>
          Tags: {artist.tags}
        </p> */}
        
        <AudioEmbed />
        
      </>
    );
  }

  render() {
    const { error, artist } = this.context;
    let content;
    if (error) {
      content =
        // This error 'string' must match the error response from artist-router.checkArtistExists
        error.error === `Artist does not exist.` ? (
          <p className='red'>Artist not found</p>
        ) : (
          <p className='red'>There was an error. Sorry about that.</p>
        );
    } else if (!artist.id) {
      content = <span className='spinner-container'><div className="lds-roller"> <div></div> <div></div> <div></div> </div></span>;
    } else {
      content = this.renderArtist();
    }
    return <section className='ArtistPage'>{content}</section>;
  }

}
