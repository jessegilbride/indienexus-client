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
    // console.log('artist: ', artist);
    // console.log(artist.soundcloud_embed)

    // let str = 'Twas the night before Xmas...';
    // let newstr = str.replace(/xmas/i, 'Christmas');
    // console.log(newstr);  // Twas the night before Christmas...

    const cleanedUpEmbed = artist.soundcloud_embed.replace(/&lt;/g, '<');
    // console.log(JSON.parse(cleanedUpEmbed));
    // console.log(typeof(cleanedUpEmbed));
    // console.log('cleanedUpEmbed: ', cleanedUpEmbed);
    
    // const cleanedUpEmbed = ArtistContext.artist.soundcloud_embed.replace(/&lt;/g, '<');
    // document.querySelector('.SoundCloudEmbed').innerHTML = cleanedUpEmbed;

    // substring(1, (artist.soundcloud_embed.length - 1))

    /* const embeddedCodeString = artist.soundcloud_embed;
    console.log(embeddedCodeString)
    document.querySelector('.soundcloud-embed').innerHTML = embeddedCodeString; */

    function SoundCloudEmbed() {
      // return <div dangerouslySetInnerHTML={{__html: artist.soundcloud_embed}} className='soundcloud-embed' />;
      return <div dangerouslySetInnerHTML={{__html: cleanedUpEmbed}} className='soundcloud-embed' />;
    }

    return (
      <>
        <header class="profile-header">
          <h2>{artist.name}</h2>
        </header>
        <p>
          {/* <ArtistBio artist={artist} /> */}
          {artist.bio}
        </p>
        {/* <p>
          <ArtistTags artist={artist} />
        </p> */}
        {/* <p>
          Tags: {artist.tags}
        </p> */}
        <p>
          Joined: <NiceDate date={artist.date_created} />
        </p>
        
        {/* <p>{artist.soundcloud_embed}</p> */}
        
        <SoundCloudEmbed />
        
        {/* <div className='soundcloud-embed' /> */}
        
        {/* <div>{cleanedUpEmbed}</div> */}
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

/* function ArtistTags({ artist }) {
  return (
    <span className=''>
      {artist.tags}
    </span>
  );
} */

/* function ArtistBio({ artist }) {
  return <p className='ArtistPage__content'>{artist.bio}</p>;
} */