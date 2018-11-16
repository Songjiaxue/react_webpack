import React from 'react';
import { Breadcrumb, } from 'antd';
import './index.less';


export default class extends React.Component {
  render() {
    return (
      <Breadcrumb className="app-crumb">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}