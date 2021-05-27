import React, { Component, Fragment } from 'react';
// import ArtistContext from '../../contexts/ArtistContext';
// import ArtistApiService from '../../services/artist-api-service';
// import { Button, Textarea } from '../Utils/Utils'
// import TagList from "../../components/TagList/TagList";
import './HomeLanding.css';

export default class HomeLanding extends Component {
  // static contextType = ArtistContext;

  render() {
    return (
      <Fragment>
        <h1>HOME</h1>
        <p>(site description)</p>
        <div>
          {/* <TagList /> */}
        </div>
      </Fragment>
    );
  }
}
