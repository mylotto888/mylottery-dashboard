import { Button, Layout, Menu, theme } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined
} from "@ant-design/icons";
import React, { useContext, useState } from "react";

import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Container = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const handleMenuItem = key => {
    if (key === "logout") {
      logout();
      navigate("/login");
    }
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["users"]}
          onClick={e => handleMenuItem(e.key)}
          items={[
            {},
            {
              key: "users",
              icon: <UserOutlined />,
              label: "Users"
            },
            {
              key: "logout",
              icon: <UploadOutlined />,
              label: "Logout"
            }
          ]}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header
          style={{
            padding: 0,
            background: colorBgContainer
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64
            }}
          />
        </Layout.Header>
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer
          }}
        >
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Container;
