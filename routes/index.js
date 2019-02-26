import React from 'react';
import { hot } from 'react-hot-loader';
import {
  Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import Cookie from 'js-cookie';
import Loadable from 'react-loadable';
import './index.less';
import AppFooter from '../src/app/common/footer';
import load from '../src/util/load';


const Home = Loadable({
  loader: () => import('../src/app/home'),
  loading: load,
  delay: 300,
});
const Index = Loadable({
  loader: () => import('../src/app'),
  loading: load,
  delay: 300,
});
const Login = Loadable({
  loader: () => import('../src/app/login'),
  loading: load,
  delay: 300,
});
const NoMatch = Loadable({
  loader: () => import('../src/app/no-match'),
  loading: load,
  delay: 300,
});

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
