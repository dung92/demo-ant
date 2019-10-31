import React, { Component } from 'react';
import { Button, Affix, PageHeader, Tag } from 'antd';
const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];
class ButtonDemo extends Component {
  state = {
    loading: false,
    top: 0,
  };
  enterLoading = () => {
    this.setState({ loading: true, top: (this.state.top + 10) });
  };
  clickBack = () => {
    window.history.back();
  };
  render() {
    return (
      <div>
        <Affix offsetTop={this.state.top}>
          <PageHeader
            ghost={true}
            onBack={this.clickBack}
            title="Title"
            subTitle="This is a subtitle"
            breadcrumb={{ routes }}
            tags={<Tag color="blue">Running</Tag>}
            extra={[
              <Button key="2" type="primary" icon="download" onClick={this.enterLoading}>Primary</Button>,
              <Button key="1" type="primary" icon="download" onClick={this.enterLoading}>Primary1</Button>
            ]}
          >
          </PageHeader>
        </Affix>
      </div>
    );
  }
}

export default ButtonDemo;