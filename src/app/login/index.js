import React from 'react';
import {
  Input, Form, Icon, message, Spin,
} from 'antd';
import md5 from 'js-md5';
import { withRouter } from 'react-router-dom';
import Cookie from 'js-cookie';
import UserInfo from '../../store/user-info';
import './index.less';

const imgHead = require('../../assets/images/default.jpg');

@withRouter
@Form.create()

class Login extends React.Component {
  state = {
    loading: false,
  }

  submitData = () => {
    const { form } = this.props;
    this.setState({
      loading: true,
    });
    form.validateFields((err, value) => {
      if (!err) {
        const params = {
          userName: value.userName,
          password: md5(md5(value.password)),
        };
        Post('/login', params).then(({ code, message: msg, data }) => {
          this.setState({
            loading: false,
          });
          if (code === 200) {
            const { history } = this.props;
            UserInfo.updateUserInfo(data);
            Cookie.set('_u', JSON.stringify(data)); // 存储用户信息
            history.push('/');
          } else {
            message.error(msg);
          }
        });
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    const { loading } = this.state;
    return (
      <div className="login-wrap">
        <div className="login-img-wrap">
          <img src={imgHead} alt="imgHead" />
        </div>
        <Form
          onSubmit={this.handleSubmit}
          className="login-form"
        >
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: '请输入用户名！',
                },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" />
                }
                placeholder="Username"
                autoComplete="off"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '请输入密码！',
                },
              ],
            })(
              <Input
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="Password"
                autoComplete="off"
              />,
            )}
          </Form.Item>
          <div className="login-btn-wrap">
            {
              loading
                ? <Spin /> : (
                  <a
                    className="login-form-button"
                    onClick={this.submitData}
                  >
                    登 录
                  </a>
                )
            }
          </div>
        </Form>
      </div>
    );
  }
}
export default Login;
