import React, { Component } from 'react';
import ArtistContext from '../../contexts/ArtistContext';
import ArtistApiService from '../../services/artist-api-service';
// import { Button, Textarea } from '../Utils/Utils'
import './ArtistCreatePage.css';

export default class ArtistCreatePage extends Component {
  static contextType = ArtistContext;

  handleSubmit = (ev) => {
    ev.preventDefault();
    // const { artist } = this.context;
    const { name, bio, tag } = ev.target;
    const artist =  {
      name:name.value, 
      bio:bio.value, 
      tag:tag.value
    };
    ArtistApiService.postArtist(artist)
      .then(this.context.postArtist)
      .then(() => {
        this.props.history.push('/artist-list')
      })
      .catch(this.context.setError);
  };

  render() {
    return (
      <form className='ArtistCreatePage' onSubmit={this.handleSubmit}>
        <div className='form-section'>
          <label htmlFor='artist-name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder=''
            required
          />
        </div>
        <div className='form-section'>
          <label htmlFor='bio'>Bio</label>
          <textarea id='bio' name='bio' rows='10' required></textarea>
        </div>
        <div className='form-section'>
          <label htmlFor='tag'>Tags (comma-separated)</label>
          <input type='text' name='tag' id='tag' placeholder='' />
        </div>
        <div className='button-section'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    );
  }
}
