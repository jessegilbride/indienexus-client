import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ArtistListProvider } from './contexts/ArtistListContext';
import { ArtistProvider } from './contexts/ArtistContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <ArtistListProvider>
      <ArtistProvider>
        <App />
      </ArtistProvider>
    </ArtistListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
