import React from 'react';
import {
  Input, Form, Icon,
} from 'antd';
import './index.less';

const imgHead = require('../../assets/images/default.jpg');

@Form.create()

class Login extends React.Component {
  state = {}

  componentDidMount() {
    Get('web/login/getUUID').then(v => {
      console.log(v);
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
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
                  message: 'Please input your username!',
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
                  message: 'Please input your Password!',
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
            <a className="login-form-button">
              登 录
            </a>
          </div>
        </Form>
      </div>
    );
  }
}
export default Login;
