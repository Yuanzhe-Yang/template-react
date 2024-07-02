import React from 'react';
import {Outlet} from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MainMenu from "@/components/MainMenu";
const { Content, Sider } = Layout;



const Home: React.FC = () => {


    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <Layout style={{ height: '100vh' }}>

            <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                    <MainMenu></MainMenu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Home;