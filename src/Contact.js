import email from './img/email1.png'
import { FaInstagram, FaGithub, FaLinkedinIn, FaDocker, FaReact } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return <>
        <div className="gradient center">
            <div className="sectionTopId" id="contact" />
            <div className="spacer50px" />
            <div className="spacer50px" />

            <div className="spacer50px" />
            <Container>
                <Row>
                    <Col>
                        <FaGithub className="footerIcon" onClick={() => {
                            window.open("https://github.com/YuTan9", "_blank")
                        }} />
                        <FaLinkedinIn className="footerIcon" onClick={() => {
                            window.open("https://www.linkedin.com/in/yutan9/", "_blank")
                        }} />
                    </Col>
                    <Col>

                    </Col>
                    <Col className="alignBottom">
                        <img src={email} alt="hi;)" className="email" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <small>Copyright &copy; 2024 Yu-Tang Shen. All Rights Reserved.</small>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <small className="footerText">This website was built with <FaReact className="reactIcon" /></small>
                    </Col>
                </Row>

            </Container>
            <div className="spacer50px" />
        </div>

    </>;
};
export default Contact;