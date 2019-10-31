import React, { Component } from 'react';
import { Cascader } from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    key: 1,
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        mianSubKey: 1,
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            subSubKey: 1
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class SelectProvince extends Component {
  selectProvince = (value) => {
    console.log('valueProvince', value);
  }
  showSelect = (value) => {
    console.log('showSelect', value);
  }
  render() {
    return (
      <div>
        <Cascader options={options} onChange={this.selectProvince} loadData={this.showSelect} expandTrigger='hover' autoFocus={true} />
      </div>

    );
  }
}
export default SelectProvince;