import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class ModalDemo extends Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  demoEvent = () => {
    alert('ok');
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
      </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable = {true}
          okText = 'Demo'
          afterClose = {this.demoEvent}
          cancelText = 'Delete'
          closable = {false}
          confirmLoading = {true}
          okType = 'warning'
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
export default ModalDemo;