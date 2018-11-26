import React from 'react';
import { hot } from 'react-hot-loader';

class Home extends React.Component {
  state = {}

  render() {
    return (
      <div>Hello Home OOOO!</div>
    );
  }
}

export default hot(module)(Home); // react组件热加载
