import React from 'react';
import { Row, Col } from 'antd';
import YearPicker from '../../components/year-picker';
import './index.less';

export default class Plan extends React.Component {
  state = {
    year: '',
  }

  render() {
    const { year } = this.state;
    return (
      <div className="plan-wrap">
        <div className="plan-search">
          <span>年份：</span>
          <div>
            <YearPicker
              value={year}
              onChange={(e) => {
                this.setState({
                  year: e,
                });
              }}
            />
          </div>
        </div>
        <div className="plan-main">
          <Row gutter={20}>
            <Col span={6}>
              <div className="col-wrap">
                <div className="col-main">
                  <p className="title">XXXXXXX</p>
                  <p className="content">xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className="tool">
                  <div className="tool-item">
                    <p>
                      <i className="iconfont icon-check" />
                      <span>已完成</span>
                    </p>
                  </div>
                  <div className="tool-item time">
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                    <span className="between">-</span>
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="col-wrap">
                <div className="col-main">
                  <p className="title">XXXXXXX</p>
                  <p className="content">xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className="tool">
                  <div className="tool-item">
                    <p>
                      <i className="iconfont icon-check" />
                      <span>已完成</span>
                    </p>
                  </div>
                  <div className="tool-item time">
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                    <span className="between">-</span>
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="col-wrap pending">
                <div className="col-main">
                  <p className="title">XXXXXXX</p>
                  <p className="content">xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className="tool">
                  <div className="tool-item">
                    <p>
                      <i className="iconfont icon-check" />
                      <span>已完成</span>
                    </p>
                  </div>
                  <div className="tool-item time">
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                    <span className="between">-</span>
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="col-wrap pending">
                <div className="col-main">
                  <p className="title">XXXXXXX</p>
                  <p className="content">xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className="tool">
                  <div className="tool-item">
                    <p>
                      <i className="iconfont icon-checko" />
                      <span>已完成</span>
                    </p>
                  </div>
                  <div className="tool-item time">
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                    <span className="between">-</span>
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="col-wrap extension">
                <div className="col-main">
                  <p className="title">XXXXXXX</p>
                  <p className="content">xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className="tool">
                  <div className="tool-item">
                    <p>
                      <i className="iconfont icon-check" />
                      <span>已完成</span>
                    </p>
                  </div>
                  <div className="tool-item time">
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                    <span className="between">-</span>
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="col-wrap extension">
                <div className="col-main">
                  <p className="title">XXXXXXX</p>
                  <p className="content">xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className="tool">
                  <div className="tool-item">
                    <p>
                      <i className="iconfont icon-check" />
                      <span>已完成</span>
                    </p>
                  </div>
                  <div className="tool-item time">
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                    <span className="between">-</span>
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="col-wrap failure">
                <div className="col-main">
                  <p className="title">XXXXXXX</p>
                  <p className="content">xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className="tool">
                  <div className="tool-item">
                    <p>
                      <i className="iconfont icon-check" />
                      <span>已完成</span>
                    </p>
                  </div>
                  <div className="tool-item time">
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                    <span className="between">-</span>
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="col-wrap failure">
                <div className="col-main">
                  <p className="title">XXXXXXX</p>
                  <p className="content">xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                </div>
                <div className="tool">
                  <div className="tool-item">
                    <p>
                      <i className="iconfont icon-check" />
                      <span>已完成</span>
                    </p>
                  </div>
                  <div className="tool-item time">
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                    <span className="between">-</span>
                    <i className="iconfont icon-calendar" />
                    <span>09-09</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
