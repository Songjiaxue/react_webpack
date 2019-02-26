import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.less';


@withRouter

class NoMatch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="no-match-wrap bg-light">
          <div className="main-center">
            404
            <p className="hint">
              Woooops... something has gone terribly wrong here
              <a
                onClick={() => {
                  const { history } = this.props;
                  history.goBack();
                }}
              >
                <i className="iconfont icon-arrowright" />
                返回上一页
              </a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default NoMatch;
