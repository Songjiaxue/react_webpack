import React from 'react';
import { hot } from 'react-hot-loader';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import Cookie from 'js-cookie';
import Home from '../src/app/home';
import Index from '../src/app';
import Login from '../src/app/login';
import NoMatch from '../src/app/no-match';
import './index.less';
import AppFooter from '../src/app/common/footer';

@withRouter
class App extends React.Component {
  render() {
    const user = Cookie.get('_u');
    return (
      <div id="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return user ? <Home /> : <Redirect to="/login" />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return user ? <Redirect to="/" /> : <Login />;
            }}
          />
          <Route
            exact
            path="/404"
            component={NoMatch}
          />
          <Route
            path="/"
            render={() => {
              return user ? <Index /> : <Redirect to="/login" />;
            }}
          />
          {/* <Redirect from="/accounts" to="/users" /> */}
        </Switch>
        <AppFooter />
      </div>
    );
  }
}
export default hot(module)(App); // react组件热加载
