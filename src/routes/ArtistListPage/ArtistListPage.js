import React, { Component } from 'react';
import ArtistListContext from '../../contexts/ArtistListContext';
// import ArtistApiService from '../../services/artist-api-service'; // commented out for static app demo; uncomment this for MVP demo
import { Section } from '../../components/Utils/Utils';
import ArtistListItem from '../../components/ArtistListItem/ArtistListItem';

const artist1 = { // remove this for MVP demo
  id: 1,
  name: 'The Coffeeshop',
  bio: '(This is where the bio would go.)',
  soundcloud_embed: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1005504319&color=%23d0c0a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/soundcloud-scenes" title="Scenes: Indie" target="_blank" style="color: #cccccc; text-decoration: none;">Scenes: Indie</a> · <a href="https://soundcloud.com/soundcloud-scenes/sets/coffee-shop-mellow-indie-chill" title="Mellow Indie Chill: Coffee Shop" target="_blank" style="color: #cccccc; text-decoration: none;">Mellow Indie Chill: Coffee Shop</a></div>`,
  tag: 'indie, rock, rap, spoken, folk',
  date_created: '2021-03-21 00:00:00'
}
/* const artist2 = { // remove this for MVP demo
  id: 2,
  name: 'KOAN Sound',
  bio: '(This is where the bio would go.)',
  soundcloud_embed: `<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1963370&color=%23d0c0a0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/koan-sound" title="KOAN Sound" target="_blank" style="color: #cccccc; text-decoration: none;">KOAN Sound</a> · <a href="https://soundcloud.com/koan-sound/sets/remixes" title="Remixes" target="_blank" style="color: #cccccc; text-decoration: none;">Remixes</a></div>`,
  tag: 'electronic, remixes',
  date_created: '2010-03-21 00:00:00'
} */

export default class ArtistListPage extends Component {
  static contextType = ArtistListContext;

  componentDidMount() {
    this.context.clearError();
    /* ArtistApiService.getArtists() // commented out for static app demo; uncomment this block for MVP demo
      .then(this.context.setArtistList)
      .catch(error => {
        console.log(error)
        return this.context.setError
      }); */
  }

  renderArtists() {
    const { artistList = [] } = this.context;
    return artistList.map((artist) => <ArtistListItem key={artist.id} artist={artist} />);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className='ArtistListPage'>
        <h2>List of All Artists</h2>
        {error ? (
          <p className='red'>There was an error, try again</p>
        ) : (
          // this.renderArtists() // put this back after static app demo is done testing
          <ArtistListItem artist={artist1} />
        )}
      </Section>
    );
  }
}
