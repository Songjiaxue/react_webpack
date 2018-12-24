import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import App from '../routes';


moment.locale('zh-cn');


const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <LocaleProvider locale={zhCN}>
        <Component />
      </LocaleProvider>
    </HashRouter>,
    document.getElementById('root'),
  );
};
render(App);
