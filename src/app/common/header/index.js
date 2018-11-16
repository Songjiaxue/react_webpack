import React from 'react';
import { Layout, Icon, Input, } from 'antd';
import './index.less';

const logo = require('../../../assets/images/logo.png');

const { Header, } = Layout;

export default class extends React.Component {
  render() {
    return (
      <Header className="app-header">
        <div className="app-header-item">
          <img src={logo} alt="logo" />
        </div>
        <div className="app-header-item">
          <Icon type="home" />
          <span>USER PROFILE</span>
        </div>
        <div className="pull-right">
          <Input
            placeholder="search..."
          />
        </div>
      </Header>
    );
  }
}