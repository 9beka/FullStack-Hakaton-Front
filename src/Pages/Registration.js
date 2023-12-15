import React  from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

import "./Login.scss";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button,  Form, Input } from "antd";
import WrapperHoc from "../hoc/WrapperHoc";
import { REGISTR_USER } from "../Redux/LoginSlicer";
import { useDispatch, useSelector } from "react-redux";
import {validationSchema} from "../constants"

const Registration = () => {
  const dispatch = useDispatch()
const {validationErrors , existsUSer} = useSelector(state => state.login);
console.log(existsUSer);
console.log( validationErrors);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    dispatch(REGISTR_USER(values))
  };
  

  const getServerError = (fieldName) => {
    console.log(fieldName);
          if (Array.isArray(validationErrors)) {
            const errorObject = validationErrors.find(err => err.path === fieldName);
      return errorObject ? errorObject.msg : null;
    }
  };
  return (
    <WrapperHoc>
      <Form
      name="register"
      validationSchema={validationSchema}
      onFinish={onFinish}

      scrollToFirstError
    >
      <Form.Item
        name="name"
        rules={[
          { required: true, message: 'Please input your Username!' },
        ]}
        help={getServerError('name')} 
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Please input your E-mail!' },
        ]}
        help={existsUSer?existsUSer:getServerError('email')}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Please input your Password!' },
        ]}
        help={getServerError('password')} 
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button> 
         OR   <Button >
              <Link to="/login">LOGIN</Link>
        </Button>
        HERE
      </Form.Item>
    </Form>
    </WrapperHoc>
  );
};
export default Registration;
