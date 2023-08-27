import { Col, Row } from "antd";

import LoginForm from "../../components/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={20} sm={16} md={12} lg={8}>
        <h2 style={{ textAlign: "center", color: "#015EB9", fontSize: "2rem" }}>
          NFT My Lottery
        </h2>
        <LoginForm />
      </Col>
    </Row>
  );
};

export default LoginPage;
