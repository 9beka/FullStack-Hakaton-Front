import React, { useState } from 'react';
import {

  UserOutlined,
  DingdingOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import "./Wrapper.scss"
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, url, children) {
  return {
    key,
    icon,
    label: url ? <Link to={url}>{label}</Link> : label,
    children,
  };
}
const items = [
  getItem('Profile', '2', <UserOutlined />,"/"),
  getItem('CRM', '3', <DingdingOutlined /> ,'/crud'),
];

const Wrapper = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
       
        <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline" items={items} />
      <div className='Wrapper__btn'>
          <Button type="primary" danger>
        Log out
      </Button>
      </div>
      </Sider>
      
      <Layout>
     
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
         
          <div
            style={{
              padding: 24,
              minHeight: 530,
              background: colorBgContainer,
            }}
          >
           <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
           
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Wrapper;