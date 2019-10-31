import React, { Component } from 'react';
import { Icon, Input, AutoComplete } from 'antd';
const dataSource = ['Burns Bay Road', 'Burn Street', 'Ba Street'];

class AutoCompleteDemo extends Component {
  render() {
    return (
      <div className="certain-category-search-wrapper" style={{ width: 250 }}>
        <AutoComplete
          dataSource={dataSource}
          placeholder="Search"
          filterOption={(inputValue, option) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
      </div>
    );
  }
}
export default AutoCompleteDemo;