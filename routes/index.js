import React from 'react';
import { hot } from 'react-hot-loader';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Cookie from 'js-cookie';
import Home from '../src/app/home';
import Index from '../src/app';
import Login from '../src/app/login';
import './index.less';

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
          <Route path="/" component={Index} />
          <Redirect from="/accounts" to="/users" />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    );
  }
}
export default hot(module)(App); // react组件热加载
