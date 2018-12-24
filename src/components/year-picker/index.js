import React, { PureComponent } from 'react';
import { DatePicker } from 'antd';
import './index.less';

export default class YearPicker extends PureComponent {
  state = {
    showYear: false,
    year: '',
  }

  componentDidMount() {
    const { value } = this.props;
    this.setState({
      year: value,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      year: nextProps.value,
    });
  }


  // 选择年份
  changeYear = (e) => {
    const { onChange } = this.props;
    this.setState({
      year: moment().format('YYYY'),
      showYear: false,
    }, () => {
      onChange(e);
    });
  }


  render() {
    const { year, showYear } = this.state;
    const { width, disabled } = this.props;
    return (
      <DatePicker
        dropdownClassName="common-year"
        className="year-input-wrap"
        disabled={disabled}
        allowClear={false}
        format="YYYY"
        placeholder="请选择年份"
        mode="year"
        value={year ? moment(year) : moment()}
        open={showYear}
        onPanelChange={this.changeYear}
        onFocus={() => {
          this.setState({
            showYear: true,
          });
        }}
        onBlur={() => {
          this.setState({
            showYear: false,
          });
        }}
        style={{ width }}
      />
    );
  }
}
