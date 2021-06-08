import React, { Component } from 'react';

/* export  */
const nullArtist = {
  bio: '',
  date_created: '',
  name: '',
  soundcloud_embed: '',
  // tags: []
};

/* context initialized to blanks */
const ArtistContext = React.createContext({
  artist: nullArtist,
  error: null,
  setError: () => {},
  clearError: () => {},
  setArtist: () => {},
  clearArtist: () => {},
});

export default ArtistContext;

export class ArtistProvider extends Component {
  state = {
    artist: nullArtist,
    error: null
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setArtist = (artist) => {
    this.setState({ artist });
  };

  clearArtist = () => {
    this.setArtist(nullArtist);
  };

  render() {
    const value = {
      artist: this.state.artist,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setArtist: this.setArtist,
      clearArtist: this.clearArtist,
    };
    return (
      <ArtistContext.Provider value={value}>
        {this.props.children}
      </ArtistContext.Provider>
    );
  }
}
