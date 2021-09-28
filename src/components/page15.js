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
                                    <Col className="boxmenu">
                                        <img className="iconmenu" src={one} />
                                        <div className="textone font"
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
                                    <Col className="boxmenupic">
                                        <img className="iconmenu" src={three} />
                                        <div className="textpic font">คู่มือการประเมิน</div>
                                    </Col>
                                </Row>
                            </Link>

                            <Content className="boxcontent" style={{
                                margin: '-300px 245px'
                            }}>
                                <h5 className="texthead font"
                                    style={{
                                        padding: 60,
                                    }}>คู่มือการใช้งาน</h5>
                                <h6 className="textsub font"
                                    style={{
                                        margin: '-70px 60px',
                                        padding: 0,
                                    }}>การประเมินผลสัมฤทธิ์แบบฟอร์ม</h6>
                                <div>
                                </div>
                                <>
                                    <Row>
                                        <Col style={{ margin: '150px 600px 0' }}>
                                            <div className="box4">
                                                <div className="inbox1 font">- เลือกปีการประเมินผลสัมฤทธิ์</div>
                                                <div className="inbox2 font">- เลือกตัวชี้วัด ประเมินตามขั้นตอน เช่น มีข้อมูล ให้อัปโหลดไฟล์ ถ้าไม่มี ทำขั้นตอนถัดไป</div>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col style={{ margin: '70px 600px 0' }}>

                                            <div className="box4">

                                                <div className="inbox3 font">- ประเมินครบสมบูรณ์จะขึ้นสถานะสีเขียวทั้งหมด</div>
                                                <div className="inbox4 font">หลังจากนั้นกดส่งแบบประเมิน เสร็จสิ้นขั้นตินการประเมิน</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </>
                                <>
                                    <Row>
                                        <Col style={{ margin: '-640px 50px 0' }}>
                                            <div className="boximage">
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ margin: '-295px 50px 0' }}>

                                            <div className="boximage">
                                            </div>
                                        </Col>
                                    </Row>
                                </>
                                <>
                                    <Row>
                                        <Col style={{ margin: '-640px 50px 0' }}>
                                            <div className="boxstep">
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ margin: '-640px 50px 0' }}>
                                            <div className="boxstep2">
                                            </div>
                                        </Col>
                                    </Row>
                                </>
                            </Content>

                        </Sider>
                    </div>

                </Layout>

            </div>



        );
    };
}
export default page2;