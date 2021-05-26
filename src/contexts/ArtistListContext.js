import React, { Component } from 'react';

const ArtistListContext = React.createContext({
  artistList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setArtistList: () => {}
});
export default ArtistListContext;

export class ArtistListProvider extends Component {
  state = {
    artistList: [],
    error: null
  };

  setArtistList = (artistList) => {
    this.setState({ artistList });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      artistList: this.state.artistList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setArtistList: this.setArtistList
    };
    return (
      <ArtistListContext.Provider value={value}>
        {this.props.children}
      </ArtistListContext.Provider>
    );
  }
}
