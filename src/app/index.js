import React from 'react';
import { Layout } from 'antd';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import AppHeader from './common/header';
import AppCrumb from './common/crumb';
import RouteConfig from '../../routes/app';
import './index.less';

const { Content } = Layout;

@withRouter

class AppIndex extends React.Component {
  renderRoutes = (arr) => {
    let routes = [];
    arr.map(v => {
      if (v.children && v.children.length > 0) {
        routes = routes.concat(this.renderRoutes(v.children));
      }
      routes = routes.concat(
        <Route
          key={v.path}
          component={v.component}
          path={v.path}
          breadcrumbName={v.breadcrumbName}
          exact
        />,
      );
    });
    return routes;
  }

  render() {
    return (
      <Layout>
        <AppHeader />
        <AppCrumb />
        <Layout>
          <Content>
            <Switch>
              {
                this.renderRoutes(RouteConfig)
              }
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default AppIndex;
