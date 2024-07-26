import { Container, Row, Col } from "react-bootstrap";

const Future = () => {
    return <>
        <div className="sectionTopId" id="future" />
        <div className="sectionTitle" >Career Plan</div>
        <div className='spacer50px' />
        <Container >
            <Row>
                <Col>
                    <strong>
                        <h3>Ultimate goal</h3>
                        <ul>
                            <li>Utilize his programming skills to solve problems</li>
                            <li>Build meaningful projects</li>
                        </ul>
                    </strong>
                </Col>
                <Col>
                    <h3>Short term</h3>
                    <ul>
                        <li>Contribute his skills to solving real-world problems</li>
                        <li>Hone his skills in a professional setting</li>
                    </ul>
                </Col>
                <Col>
                    <h3>Long term</h3>
                    <ul>
                        <li>Become a leader</li>
                    </ul>

                </Col>
            </Row>
        </Container >
    </>;
};

export default Future;