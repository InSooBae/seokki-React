import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './Home';
import MyPage from './MyPage';
import Login from './Login';
import SignUp from './SignUp';
import FindPW from './FindPW';
import Register from './Register';
import Auth from './Auth';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/myPage" exact component={MyPage} />
      <Route path="/login" exact component={Auth} />
      <Route path="/login/signUp" exact component={SignUp} />
      <Route path="/login/findPW" exact component={FindPW} />
      <Route path="/register" exact component={Register} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
