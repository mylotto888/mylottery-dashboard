import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AuthContext } from "../context/authContext";
import { login } from "../features/auth/authAPI";

const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  const navigate = useNavigate();

  const onFinish = async values => {
    try {
      const { username, password } = values;
      let response = await dispatch(login({ username, password }));

      let authInfo = {
        token: response.payload.accessToken,
        refreshToken: response.payload.refreshToken
      };

      await authContext.setAuthState(authInfo);
      message.success("Login successful");
      navigate("/user-list"); // Redirect to home page or any other protected route
    } catch (error) {
      console.log("login error", error);
      message.error("Login failed. Invalid credentials.");
    }
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input size="large" placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        autoComplete="cc-number"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password size="large" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          LOGIN
        </Button>
      </Form.Item>
      <Form.Item
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          Or
        </div>
        <Link style={{ fontSize: "16px" }} to="/register">
          REGISTER
        </Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
