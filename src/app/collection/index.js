import React from 'react';
import {
  Icon, Timeline,
} from 'antd';
import './index.less';


export default class Collection extends React.Component {
  state = {}

  render() {
    return (
      <div className="collection-wrap">
        <div className="banner-wrap" />
        <div className="common-timeline">
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
    );
  }
}
