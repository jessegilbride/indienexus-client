import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <section>
          <h2>Create Profile</h2>
          <p>When creating your profile, remember to give the 'bio' a personal touch. Remember the reader; your fans and those who would hire you want to get a sense of your background and inspirations. And don't forget to proveide links to your social media, and contact information for getting hired.</p>
          <p>Adding tags is optional, but recommended. Tags are searchable and help people find artists who use them.</p>
          {/* <p>Putting a SoundCloud playlist of your music is also optional, but it's a great way to let people dive right into getting know and hear your sound. If you don't know how to get the embed code, follow these steps:</p>
          <ol>
            <li>On SoundCloud, click the 'Share' button below the track/playlist that you want to embed. (An overlay will appear.)</li>
            <li>Click on the "Embed" tab of the overlay, copy the HTML code in the "Code" section.</li>
            <li>On this page, paste that HTML code into the "SoundCloud Embed" form field. (Please note, you can only have one embed on your profile at this time.)</li>
          </ol> */}
        </section>
        <section>
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
        </section>
      </Fragment>
    );
  }
}
