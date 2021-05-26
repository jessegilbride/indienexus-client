import TokenService from './token-service';
import config from '../config';

const ArtistApiService = {
  getArtists() {
    return fetch(`${config.API_ENDPOINT}/artists`, {
      headers: {}
    })
    .then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  getArtist(artistId) {
    return fetch(`${config.API_ENDPOINT}/artists/${artistId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  postArtist(artist) {
    // name, bio, soundcloud_embed, tag, date_created
    return fetch(`${config.API_ENDPOINT}/artists`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(artist),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
};

export default ArtistApiService;
