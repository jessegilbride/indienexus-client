import React, { Component } from 'react';
import ArtistContext from '../../contexts/ArtistContext';
import ArtistApiService from '../../services/artist-api-service';
// import { NiceDate, Section } from '../../components/Utils/Utils';
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

  // name, bio, soundcloud_embed, tag, date_created
  renderArtist() {
    const { artist } = this.context;
    console.log(artist);


    /* const embeddedCodeString = artist.soundcloud_embed;
    document.querySelector('.SoundCloudEmbed').innerHTML = embeddedCodeString; */

    // substring(1, (artist.soundcloud_embed.length - 1))

    /* function SoundCloudEmbed() {
      return <div dangerouslySetInnerHTML={{__html: artist.soundcloud_embed}} className='soundcloud-embed' />;
      // return <div dangerouslySetInnerHTML={{__html: updatedEmbed}} className='soundcloud-embed' />;
    } */

    return (
      <>
        <h2>{artist.name}</h2>
        {/* <p>id: {artist.id}</p> */}
        <p>
          {/* <ArtistBio artist={artist} /> */}
          {artist.bio}
        </p>
        <p>
          {/* <ArtistTags artist={artist} /> */}
          Tags: {artist.tag}
        </p>
        <p>
          Joined: <NiceDate date={artist.date_created} />
        </p>
        {/* <p>{artist.soundcloud_embed}</p> */}
        {/* <SoundCloudEmbed /> */}
        {/* <div className='SoundCloudEmbed' /> */}
      </>
    );
  }

  render() {
    const { error, artist } = this.context;
    let content;
    if (error) {
      content =
        error.error === `Artist doesn't exist` ? (
          <p className='red'>Artist not found</p>
        ) : (
          <p className='red'>There was an error</p>
        );
    } else if (!artist.id) {
      content = <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
    } else {
      content = this.renderArtist();
    }
    return <section className='ArtistPage'>{content}</section>;
  }

}

/* function ArtistTags({ artist }) {
  return (
    <span className=''>
      {artist.tag}
    </span>
  );
} */

/* function ArtistBio({ artist }) {
  return <p className='ArtistPage__content'>{artist.bio}</p>;
} */