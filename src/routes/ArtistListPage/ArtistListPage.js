import React, { Component } from 'react';
import ArtistListContext from '../../contexts/ArtistListContext';
import ArtistApiService from '../../services/artist-api-service';
import { Section } from '../../components/Utils/Utils';
import ArtistListItem from '../../components/ArtistListItem/ArtistListItem';

export default class ArtistListPage extends Component {
  static contextType = ArtistListContext;

  componentDidMount() {
    this.context.clearError();
    ArtistApiService.getArtists()
      .then(this.context.setArtistList)
      .catch(error => {
        console.log(error)
        return this.context.setError
      });
  }

  renderArtists() {
    const { artistList = [] } = this.context;
    return artistList.map((artist) => <ArtistListItem key={artist.id} artist={artist} />);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className='ArtistListPage'>
        {error ? (
          <p className='red'>There was an error, try again</p>
        ) : (
          this.renderArtists()
        )}
      </Section>
    );
  }
}
