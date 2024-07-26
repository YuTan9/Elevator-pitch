import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Scroll from 'react-scroll';
import profile from './img/about/profile.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "./logo.svg"
import { isVisible } from '@testing-library/user-event/dist/utils';
const About = () => {
    return <>
        <div className="sectionTopId" id="about" />


        <Container>
            <Row className='align-items-center'>
                <Col>
                    <img src={profile} alt="" id='profilePic' />
                </Col>
                <Col className='bio'>
                    <Row />
                    <Row>
                        <ul>
                            <li> He is a
                                <ul>
                                    <li>Software Engineer / Machine Learning Engineer</li>
                                    <li>Team player</li>
                                </ul>

                            </li>

                        </ul>
                        <br />
                        <ul>
                            <li>Proficient in
                                <ul>
                                    <li>Algorithms</li>
                                    <li>OOP</li>
                                    <li>Problem solving</li>
                                </ul>
                            </li>
                        </ul>
                        <br />
                        <ul>
                            <li>Passionate about
                                <ul>
                                    <li>Solving problems</li>
                                    <li>Building stuff</li>
                                    <li>Tech</li>
                                </ul>
                            </li>
                        </ul>
                    </Row>
                    <Row />
                </Col>
            </Row>
        </Container>


        <div className='spacer50px' />
        <div className='spacer50px' />
        <div className='spacer50px' />
        <div className="sectionTitle" >Experience</div>
        <div className='spacer50px' />
        <VerticalTimeline lineColor='#343a40'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022"
                iconStyle={{ background: '#343a40', color: '#343a40' }}
            >
                <h3 className="vertical-timeline-element-title">ML Engineer Intern </h3>
                <h5 className="vertical-timeline-element-subtitle">Pure Storage</h5>
                <div>
                    <li>Successfully developed a NLP model to predict product lifetime</li>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fed136', color: '#343a40' }}
                contentArrowStyle={{ borderRight: '7px solid  #fed136' }}
                date="2021 - 2023"
                iconStyle={{ background: '#343a40', color: '#343a40' }}
            >
                <h3 className="vertical-timeline-element-title">MS Computer Science</h3>
                <h5 className="vertical-timeline-element-subtitle">San Jose State University</h5>
                <div>
                    <li>HKANC Scholarship recipient </li>
                    <li>Grader for Operating Systems Course</li>
                </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021"
                iconStyle={{ background: '#343a40', color: '#343a40' }}
            >
                <h3 className="vertical-timeline-element-title">ML Engineer</h3>
                <h5 className="vertical-timeline-element-subtitle">Winbond</h5>
                <div>
                    <li>Delivered a dashboard visualizing tech market trend</li>
                    <li>Built a Neo4j database and visualized data with JavaScript</li>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019"
                iconStyle={{ background: '#343a40', color: '#343a40' }}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h5 className="vertical-timeline-element-subtitle">Cellmax Life</h5>
                <div>
                    <li>Delivered a medical report generator app</li>
                    <li>Built a MySQL database</li>
                    <li>Developed a front-end interface to access the database</li>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fed136', color: '#343a40' }}
                contentArrowStyle={{ borderRight: '7px solid  #fed136' }}
                date="2015 - 2019"
                iconStyle={{ background: '#343a40', color: '#343a40' }}
            >
                <h3 className="vertical-timeline-element-title">BS Computer Science</h3>
                <h5 className="vertical-timeline-element-subtitle">The Chinese University of Hong Kong</h5>
                <div>
                    <li>Cathay Pacific Hackathon Participant</li>
                </div>
            </VerticalTimelineElement>
        </VerticalTimeline>

    </>;
};
export default About;






