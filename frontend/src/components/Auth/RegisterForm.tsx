import React from 'react';
import {Button, Checkbox, Form, Input} from "antd";

const RegisterForm = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
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

            <Form.Item
                label="Password repeat"
                name="passwordRepeat"
                rules={[{ required: true, message: 'Please input your password again!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button color="red" type="default" htmlType="submit" className="border-gray-900">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;