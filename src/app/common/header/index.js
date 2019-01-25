import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import { observer, inject } from 'mobx-react';
import Cookie from 'js-cookie';
import RouteConfig from '../../../../routes/app';
import './index.less';

const logo = require('../../../assets/images/logo.png');

const { Header } = Layout;

@inject('store')
@observer
@withRouter

class AppHeader extends React.Component {
  state = {}

  logout = () => {
    const { history, store } = this.props;
    Cookie.remove('_u');
    store.u.updateUserInfo();
    history.push('/login');
  }

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
          {
            // <Input
            //   placeholder="search..."
            // />
          }
          <a
            onClick={this.logout}
          >
            <span className="logout-btn">退出登录</span>
          </a>
        </div>
      </Header>
    );
  }
}

export default AppHeader;
