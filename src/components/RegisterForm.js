import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { register } from "../features/auth/authAPI";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(state => state.auth);

  const onFinish = async values => {
    try {
      const { username, password } = values;
      await dispatch(register({ username, password }));
      message.success("Register successful");
      navigate("/login"); // Redirect to home page or any other protected route
    } catch (error) {
      console.log("register error", error);
      message.error("Register failed");
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
          REGISTER
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
        <Link style={{ fontSize: "16px" }} to="/login">
          LOGIN
        </Link>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
