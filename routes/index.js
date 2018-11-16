import React from 'react';
import { hot, } from 'react-hot-loader';
import { Switch, Route,Redirect,withRouter, } from 'react-router-dom';
import Login from '&/app/login';
import Index from '&/app';
import './index.less';

@withRouter

class App extends React.Component {
  render () {
    return (
      <div id="app">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/login" component={Login} />
          <Redirect from="/accounts" to="/users" />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    );
  }
}
export default hot(module)(App) // react组件热加载




