import React from 'react';
import Header from './components/Header';
import MyProfile from './components/MyProfile';
import Router from './components/Router';
import Recent from './components/Recent';

export default function App() {
  return (
    <div>
      <Header />
      <div className="uk-margin-large-left uk-margin-large-right">
        <div data-uk-grid>
          <MyProfile />
          <Router />
          <Recent />
        </div>
      </div>
    </div>
  );
}
