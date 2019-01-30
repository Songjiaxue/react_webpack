import React, { PureComponent } from 'react';
import './index.less';

class AppFooter extends PureComponent {
  state={}

  render() {
    return (
      <div className="footer-wrap">
        <p>
          UI来自
          <a
            href="http://aqvatarius.com/themes/index.php?template=taurus"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://aqvatarius.com/themes/index.php?template=taurus
          </a>
        </p>
      </div>
    );
  }
}

export default AppFooter;
