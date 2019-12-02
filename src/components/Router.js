import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import Auth from './Auth';
import MyPage from './MyPage';
import Header from './Header';
import Search from './Search';
import MyProfile from './MyProfile';
import Recent from './Recent';
import Footer from './Footer';
import Register from './Register';
import Project from './Project';
import axios from 'axios';
import ViewProduct from './ViewProduct';
// if logged in

const LoggedInRoutes = () => (
  <>
    <Header />
    <Search />
    <div className="uk-margin-large-left uk-margin-large-right">
      <div data-uk-grid>
        <MyProfile />
        <div className="uk-width-expand">
          <Route path="/" exact component={Home} />
          <Route path="/view:id" exact component={ViewProduct} />
          <Route path="/mypage" exact component={MyPage} />
          <Route path="/register" exact component={Register} />
        </div>
        <Recent />
      </div>
    </div>
    <Footer />
  </>
);
// if not logged in
const LoggedOutRoute = () => (
  <>
    <div className="uk-margin-large-left uk-margin-large-right">
      <div data-uk-grid>
        <Route exact path="/" component={Auth} />
      </div>
    </div>
  </>
);

//main
const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoute />}</Switch>
  </Router>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
