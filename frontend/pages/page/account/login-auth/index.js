import React, { useState, useEffect } from 'react';
import CommonLayout from '../../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input, Col } from 'reactstrap';
import { useRouter } from 'next/router';

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("test123");
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );

    useEffect(() => {
        localStorage.setItem('Name', name);
    }, [name]);

    const loginAuth = () => {
        localStorage.setItem("user", true)
        setTimeout(() => {
            router.push(`/page/account/checkout`);
        }, 200);
    }

    return (
        <CommonLayout parent="home" title="login">
            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <div className="form-group">
                                        <Label className="form-label" for="email">Email</Label>
                                        <Input type="email" defaultValue={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <Label className="form-label" for="review">Password</Label>
                                        <Input type="password" defaultValue={password} onChange={e => setPassword(e.target.value)} className="form-control" id="review"
                                            placeholder="Enter your password" required="" />
                                    </div>
                                    <a href="#" className="btn btn-solid" onClick={() => loginAuth()}>Login</a>
                                    <div className="footer-social">
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com" target="_blank">
                                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://plus.google.com" target="_blank">
                                                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col lg="6" className="right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                                    able to order from our shop. To start shopping click register.</p><a href="#"
                                        className="btn btn-solid">Create an Account</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Login;