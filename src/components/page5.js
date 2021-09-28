import React from 'react';
import './css/menu.css';
import './css/content.css';
import { Layout, Menu, Row, Col, Card, Button, Icon, Image, Avatar, Dropdown, NavLink } from 'antd';
import { mockdata } from '../mock/mockdata';
import Logo from '../Icon/Logo.svg';
import one from '../Icon/3.svg';
import two from '../Icon/1.svg';
import three from '../Icon/2.svg';
import login from '../Icon/login – 1.png';
import { DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;

class page2 extends React.Component {
    state = {
        collapsed: false,
    };
    render() {
        return (
            <div className="background">
                <Layout className="toptab">
                    <div >
                        <Sider className="sidetab">
                            <div>
                                <div className="maintext font"
                                    style={{
                                        margin: '20px 250px',
                                        padding: 0,
                                    }}>
                                    การประเมินผลสัมฤทธิ์
                                </div>
                                <div className="subtext font"
                                    style={{
                                        margin: '-10px 260px',
                                        padding: 0,
                                    }}>สมาคมกีฬาอาชีพฟุตบอล</div>
                            </div>
                            <div className="image">
                                <img src={Logo}
                                />
                            </div>
                            <Link to="/page5">
                                <Row>
                                    <Col className="boxmenupic">
                                        <img className="iconmenu" src={one} />
                                        <div className="textonepic font"
                                        >แดชบอร์ด</div>
                                    </Col>
                                </Row>
                            </Link>
                            <Link to="/page2">
                                <Row>
                                    <Col className="boxmenu">
                                        <img className="iconmenu" src={two} />
                                        <div className="texttwo font">การประเมินผลสัมฤทธิ์</div>
                                    </Col>
                                </Row>
                            </Link>
                            <Link to="/page15">
                                <Row>
                                    <Col className="boxmenu">
                                        <img className="iconmenu" src={three} />
                                        <div className="texttwo font">คู่มือการประเมิน</div>
                                    </Col>
                                </Row>
                            </Link>

                            <Content className="boxcontent" style={{
                                margin: '-300px 245px'
                            }}>
                            </Content>

                        </Sider>
                    </div>

                </Layout>

            </div>



        );
    };
}
export default page2;