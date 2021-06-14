import React, { Component, Fragment } from 'react';
import ArtistListContext from '../../contexts/ArtistListContext';
import ArtistApiService from '../../services/artist-api-service';
import ArtistListItem from '../../components/ArtistListItem/ArtistListItem';
import './ArtistListPage.css';

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
      <Fragment>
        <section className="page-width-container page-top-banner artist-list-banner">
          <h2 className='page-heading'>All Artists</h2>
        </section>
        <section className="artist-list page-width-container">
          {error ? (
            <p className='red'>There was an error, try again</p>
          ) : (
            this.renderArtists()
          )}
        </section>
      </Fragment>
    );
  }
}
