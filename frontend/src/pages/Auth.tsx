import {Tabs, TabsProps} from "antd";
import '../App.css';
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";

const items: TabsProps['items'] = [
    {
        key: 'Login',
        label: `Login`,
        children: <LoginForm />,
    },
    {
        key: 'Register',
        label: `Register`,
        children: <RegisterForm />,
    },
];

export const Auth = () => {
    return (
        <div className="p-4 bg-gray-400 rounded-lg">
            <Tabs items={items} className="flex items-center"/>
        </div>
    )
}