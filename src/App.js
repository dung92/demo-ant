import React, { Component } from 'react';
import './App.css';
import ButtonDemo from './button/Button';
import { Icon, Row, Col, Breadcrumb, Menu, Dropdown } from 'antd';
import SliderMenu from './sliderMenu/SliderMenu';
import AutoCompleteDemo from './autoComplete/AutoComplete';
import SelectProvince from './selectProvince/SelectProvince';
import WrappedDynamicFieldSet from './form/Form';
import InputDemo from './input/Input';
import ModalDemo from './modal/ModalDemo';
import TableDemo from './table/Table';
const { SubMenu } = Menu;

class App extends Component {
  state = {
    title: 'demo'
  }
  menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
      <SubMenu title="sub menu">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  );
  render() {
    return (
      <div>
        <div>
          <Row>
            <Col md={6}>
              <ButtonDemo />
            </Col>
            <Col md={6}>
              <ButtonDemo />
            </Col>
            <Col md={6}>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="http://www.tmall.com/">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="http://www.tmall.com/">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
              <Dropdown overlay={this.menu} overlayClassName='demo-dropdown' placement="bottomLeft" trigger={['click']}>
                <a className="ant-dropdown-link" href="http://www.tmall.com/">
                  Hover me <Icon type="down" />
                </a>
              </Dropdown>
            </Col>
            <Col md={6}>
              <SliderMenu />
            </Col>
            <Col md={6}>
              <AutoCompleteDemo />
            </Col>
            <Col md={6}>
              <SelectProvince />
            </Col>
            <Col md={6}>
              <WrappedDynamicFieldSet />
            </Col>
            <Col md={6}>
              <InputDemo />
            </Col>
          </Row>
        </div>
        <div>
          <ModalDemo/>
          <TableDemo/>
        </div>
      </div>

    );
  }
}

export default App;
