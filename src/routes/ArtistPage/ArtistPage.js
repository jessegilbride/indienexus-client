import React, { Component } from 'react';
import ArtistContext from '../../contexts/ArtistContext';
// import ArtistApiService from '../../services/artist-api-service'; // commented out for static app demo; uncomment this for MVP demo
import { NiceDate, Section } from '../../components/Utils/Utils';
import './ArtistPage.css';

export default class ArtistPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = ArtistContext;

  componentDidMount() {
    const { artistId } = this.props.match.params;
    this.context.clearError();

    /* ArtistApiService.getArtist(artistId) // commented out for static app demo; uncomment this block for MVP demo
      .then(this.context.setArtist)
      .catch(this.context.setError); */
  }

  componentWillUnmount() {
    this.context.clearArtist();
  }

  // name, bio, soundcloud_embed, tag, date_created
  renderArtist() {
    // const { artist } = this.context; // uncomment this for MVP demo
    const artist = { // remove this for MVP demo
      id: 1,
      name: 'The Coffeeshop',
      bio: '(This is where the bio would go.)',
      soundcloud_embed: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1005504319&color=%23d0c0a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/soundcloud-scenes" title="Scenes: Indie" target="_blank" style="color: #cccccc; text-decoration: none;">Scenes: Indie</a> · <a href="https://soundcloud.com/soundcloud-scenes/sets/coffee-shop-mellow-indie-chill" title="Mellow Indie Chill: Coffee Shop" target="_blank" style="color: #cccccc; text-decoration: none;">Mellow Indie Chill: Coffee Shop</a></div>`,
      tag: 'indie, rock, rap, spoken, folk',
      date_created: '2021-03-21 00:00:00'
    }
    
    function SoundCloudEmbed() {
      return <div dangerouslySetInnerHTML={{__html: artist.soundcloud_embed}} className='soundcloud-embed' />;
    }    

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
        <SoundCloudEmbed />
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
    /* } else if (!artist.id) {
      // content = <div className='loading' />;
      content = <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>; */
    } else {
      content = this.renderArtist();
    }
    return <Section className='ArtistPage'>{content}</Section>;
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