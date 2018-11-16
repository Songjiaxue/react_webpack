import React from 'react';
import { Layout, Button, } from 'antd';
import AppHeader from '&/app/common/header';
import AppCrumb from '&/app/common/crumb';
import './index.less';

const { Content, } = Layout;

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <AppHeader />
        <AppCrumb />
        <Layout>
          <Content><Button type="primary">{moment().format("YYYY")}</Button></Content>
        </Layout>
      </Layout>
    );
  }
}