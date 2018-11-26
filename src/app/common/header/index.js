import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Input } from 'antd';
import RouteConfig from '../../../../routes/app';
import './index.less';

const logo = require('../../../assets/images/logo.png');

const { Header } = Layout;

export default class extends React.Component {
  state = {}

  render() {
    return (
      <Header className="app-header">
        <div className="app-header-item">
          <img src={logo} alt="logo" />
        </div>
        {
          RouteConfig.map(v => {
            return (
              <div
                className="app-header-item"
                key={v.path}
              >
                <Link to={v.path}>
                  <Icon type="home" />
                  <span>{v.breadcrumbName}</span>
                </Link>
              </div>
            );
          })
        }

        <div className="pull-right">
          <Input
            placeholder="search..."
          />
        </div>
      </Header>
    );
  }
}
