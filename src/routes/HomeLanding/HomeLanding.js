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
        <p>IndieNexus is the hub for independent music artists to showcase themselves, gain exposure, and connect with fans. Explore the various genres, or search for artists by name.</p>
        <div>
          {/* <TagList /> */}
        </div>
      </Fragment>
    );
  }
}
