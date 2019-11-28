import React from 'react';
import Header from './components/Header';
import MyProfile from './components/MyProfile';
import Router from './components/Router';
import Recent from './components/Recent';
import Search from './components/Search';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />

      <div className="uk-margin-large-left uk-margin-large-right">
        <div data-uk-grid>
          <MyProfile />
          <div className="uk-width-expand">
            <Router />
          </div>
          <Recent />
        </div>
      </div>
      <Footer />
    </>
  );
}
