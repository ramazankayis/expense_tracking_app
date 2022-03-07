import { Form, Input, Result, Button } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { login } from '../store/actions/userActions';
import { AppState } from '../store/reducers';
import { LoginForm } from '../store/types/users';
import api from '../utils/api';
import showError from '../utils/showError';
import ShowSuccess from '../utils/showSuccess';
function Login() {
  const history = useHistory();
  const location = useLocation<{newSignUp?: boolean}>();

  console.log(`location=>`, { location });

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state: AppState) => state.user);

  const onFinish = (values: LoginForm) => {
    dispatch(login(values));
  };

  useEffect(() => {
    error && showError(error);
  }, [error]);

  useEffect(() => {
    data.username && ShowSuccess('You have successfully logged in');
  }, [data.username]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push("/");
    }
  }, [data]);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Please Login</h2>
      {location.state?.newSignUp && (
        <Result
          status="success"
          title="You successfully signed up!"
          subTitle="Please login using your credentials"
        />
      )}
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
