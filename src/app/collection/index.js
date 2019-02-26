import React from 'react';
import {
  Timeline,
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
                  <i className="iconfont icon-alert" />
                </div>
              )}
            >
              <div className="bubble">我是气泡文本</div>
              <p>2018-09-08</p>
            </Timeline.Item>
            <Timeline.Item
              dot={(
                <div className="timeline-icon-wrap">
                  <i className="iconfont icon-alert" />
                </div>
              )}
            >
              <div className="bubble">我是气泡文本</div>
              <p>2018-09-08</p>
            </Timeline.Item>
            <Timeline.Item
              dot={(
                <div className="timeline-icon-wrap">
                  <i className="iconfont icon-alert" />
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
