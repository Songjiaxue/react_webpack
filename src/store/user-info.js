import { observable, action } from 'mobx';
import Cookie from 'js-cookie';

class UserInfo {
  @observable userInfo = {};


  constructor() {
    const info = Cookie.get('_u');
    this.userInfo = info ? JSON.parse(info) : {};
    console.warn(info, 'kkokoko');
  }

  @action delUserInfo = () => {
    this.userInfo = {};
  };

  @action updateUserInfo = (data) => {
    this.userInfo = data || {};
  };
}

export default new UserInfo();
