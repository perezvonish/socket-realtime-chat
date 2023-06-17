import React from 'react';
import ChatHeader from "../components/Chat/ChatHeader";
import ChatWindow from "../components/Chat/ChatWindow";
import Input from "../components/Chat/Input";
import {Content, Header} from "antd/es/layout/layout";
import {Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import {Footer} from "antd/lib/layout/layout";
import ChatSider from "../components/Chat/ChatSider";

const Chat = () => {
    return (
    <div className="w-full p-4 rounded-2xl bg-gray-400">
        <Layout>
            <Sider className="text-black text-2xl" style={{backgroundColor: "rgb(156 163 175"}}>
                <ChatSider />
            </Sider>
            <Layout>
                <Header className="text-2xl bg-gray-400">
                    <ChatHeader />
                </Header>
                <Content className="text-black bg-gray-400">
                    <ChatWindow />
                </Content>
                <Footer className="p-0 bg-gray-400">
                    <Input />
                </Footer>
            </Layout>
        </Layout>
    </div>
    );
};

export default Chat;