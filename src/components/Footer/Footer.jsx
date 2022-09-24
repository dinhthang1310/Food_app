import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import '../../style/footer.css'
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <div className=' footer__logo text-start '>
                            <img src={logo} alt="logos"/>
                            <h5>Tasty Treat</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nesciunt pariatur accusamus
                            </p>
                        </div>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className="footer__title">Delivery Time</h5>
                            <ListGroup className="deliver__time__list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>

                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className="footer__title">Contact </h5>
                        <ListGroup className="deliver__time__list">
                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Address : Thanh Xuân, Hà Nội, Việt Nam</span>
                            </ListGroupItem>

                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>Phone : 0366370395</span>
                            </ListGroupItem>

                            <ListGroupItem className="delivery__time-item border-0 ps-0">
                                <span>mt@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer__title'>Newsletter</h5>
                        <p>Subscribe our Newsletter</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Enter your email"/>
                            <span><i className="ri-send-plane-line"></i></span>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col lg='6' md='6'>
                        <p className="copyRight__text">Copyright - 2022, website made by coder </p>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="social__link d-flex align-items-center gap-4 justify-content-end" >
                            <p className="m-0">Follow :</p>
                            <span>
                                <Link to='https://www.facebook.com/profile.php?id=100011087199452'>
                                    <i className="ri-facebook-circle-line"></i>
                                </Link>
                            </span>

                            <span>
                                <Link to='https://github.com/dinhthang1310'>
                                    <i className="ri-github-line"></i>
                                </Link>
                            </span>

                            <span>
                                <Link>
                                    <i className="ri-instagram-line"></i>
                                </Link>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;