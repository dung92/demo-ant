import React, { Component } from 'react';
import { Input, Icon } from 'antd';

class InputDemo extends Component {
  inputEnter = (event) => {
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        <Input addonBefore={<Icon type="setting" />} defaultValue="Setting" size="small" type="textarea" onPressEnter={this.inputEnter} />
      </div>
    );
  }
}
export default InputDemo;