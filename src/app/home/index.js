import React from 'react';
import {
  Layout, Icon, Card, Progress, Timeline,
} from 'antd';
import AppHeader from '../common/header';
import './index.less';

const Img = require('../../assets/images/img.jpg');
const Default = require('../../assets/images/default.jpg');

const { Content } = Layout;

class Home extends React.Component {
  state = {}

  render() {
    return (
      <Layout>
        <AppHeader />
        <Layout>
          <Content>
            <div className="home main-wrapper">
              <div className="main-left">
                <div className="header-wrap">
                  <div className="header-top">
                    <div className="img-wrap">
                      <img src={Img} alt="header-img" />
                    </div>
                    <div>
                      <p><b>XXX</b></p>
                      <p>xxx:xxxxxx</p>
                      <p>xxx:xxxxxx</p>
                      <p>xxx:xxxxxx</p>
                    </div>
                  </div>
                  <div className="list-wrap">
                    <div className="list-item">
                      <div className="icon-wrap">
                        <Icon type="smile" />
                      </div>
                      <div>ITEM1</div>
                      <div className="icon-wrap next-wrap">
                        <Icon type="right" />
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="icon-wrap">
                        <Icon type="smile" />
                      </div>
                      <div>ITEM2</div>
                      <div className="icon-wrap next-wrap">
                        <Icon type="right" />
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="icon-wrap">
                        <Icon type="smile" />
                      </div>
                      <div>ITEM3</div>
                      <div className="icon-wrap next-wrap">
                        <Icon type="right" />
                      </div>
                    </div>
                    <div className="list-item">
                      <div className="icon-wrap">
                        <Icon type="smile" />
                      </div>
                      <div>ITEM4</div>
                      <div className="icon-wrap next-wrap">
                        <Icon type="right" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-wrap">
                  <Card
                    title="XXX"
                    extra={
                      <span>SHOW ALL</span>
                    }
                    className="card-wrap"
                    bordered={false}
                  >
                    <div className="list-wrap">
                      <div className="list-item">
                        <div className="default-img-wrap">
                          <img src={Default} alt="default_img" />
                        </div>
                        <div>
                          <p>DEFAULT1</p>
                          <Progress percent={30} />
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="default-img-wrap">
                          <img src={Default} alt="default_img" />
                        </div>
                        <div>
                          <p>DEFAULT2</p>
                          <Progress percent={50} />
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="default-img-wrap">
                          <img src={Default} alt="default_img" />
                        </div>
                        <div>
                          <p>DEFAULT3</p>
                          <Progress percent={30} />
                        </div>
                      </div>
                      <div className="list-item">
                        <div className="default-img-wrap">
                          <img src={Default} alt="default_img" />
                        </div>
                        <div>
                          <p>DEFAULT4</p>
                          <Progress percent={70} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="common-timeline main-right">
                <Timeline>
                  <Timeline.Item
                    dot={(
                      <div className="timeline-icon-wrap">
                        <Icon
                          type="alert"
                          style={{
                            fontSize: '0.14rem',
                          }}
                          color="#fff"
                        />
                      </div>
                    )}
                  >
                    <div className="bubble">我是气泡文本</div>
                    <p>2018-09-08</p>
                  </Timeline.Item>
                  <Timeline.Item
                    dot={(
                      <div className="timeline-icon-wrap">
                        <Icon
                          type="alert"
                          style={{
                            fontSize: '0.14rem',
                          }}
                          color="#fff"
                        />
                      </div>
                    )}
                  >
                    <div className="bubble">我是气泡文本</div>
                    <p>2018-09-08</p>
                  </Timeline.Item>
                  <Timeline.Item
                    dot={(
                      <div className="timeline-icon-wrap">
                        <Icon
                          type="alert"
                          style={{
                            fontSize: '0.14rem',
                          }}
                          color="#fff"
                        />
                      </div>
                    )}
                  >
                    <div className="bubble">我是气泡文本</div>
                    <p>2018-09-08</p>
                  </Timeline.Item>
                </Timeline>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home; // react组件热加载
