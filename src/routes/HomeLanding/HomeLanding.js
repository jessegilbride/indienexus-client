import React, { Component, Fragment } from 'react';
// import ArtistContext from '../../contexts/ArtistContext';
// import ArtistApiService from '../../services/artist-api-service';
// import TagList from "../../components/TagList/TagList";
import './HomeLanding.css';

export default class HomeLanding extends Component {
  // static contextType = ArtistContext;

  render() {
    return (
      <Fragment>
        <section className='page-top-banner homepage-banner'>
          <h1 className=''>
            IndieNexus. 
            <br />
            <span className='bi-line'>Where artists and fans converge.</span>
          </h1>
        </section>

        <section className='homepage-section featured-artist'></section>
        
        <section className='site-intro-section'>
          <p className='site-intro-content'>This is the hub for independent music artists to showcase themselves, gain exposure, and connect with fans. Explore the various genres, or search for artists by name.</p>
        </section>
        
        <section>
          <div>
            {/* <TagList /> */}
          </div>
        </section>
      </Fragment>
    );
  }
}
