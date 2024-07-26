import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Scroll from 'react-scroll';

const Bar = () => {
    const [collapse, updateState] = useState(false);
    return <Navbar id="mainNav" bg="dark" variant="dark" fixed="top" sticky="top" expand="sm" expanded={collapse}>
        <Navbar.Brand id="brand" onClick={() => {
            updateState(false);
            Scroll.animateScroll.scrollToTop({
                duration: 1500,
                delay: 100,
                smooth: 'easeInOutQuint'
            });
        }}>
            <h4>&nbsp;&nbsp;&nbsp;Thomas Shen</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { updateState(!collapse) }} />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link className="nav-item">
                    <Scroll.Link to="about" smooth={"easeInOutQuint"} duration={1500} offset={window.outerWidth < 576 ? -255 : 0} onClick={() => {
                        updateState(false);
                    }}>About</Scroll.Link>
                </Nav.Link>
                {/* <Nav.Link className="nav-item">
                    <Scroll.Link to="portfolio" smooth={"easeInOutQuint"} duration={1500} offset={window.outerWidth < 576 ? -255 : 0} onClick={() => {
                        updateState(false);
                    }}>Portfolio</Scroll.Link>
                </Nav.Link>
                <Nav.Link className="nav-item">
                    <Scroll.Link to="life" smooth={"easeInOutQuint"} duration={1500} offset={window.outerWidth < 576 ? -255 : 0} onClick={() => {
                        updateState(false);
                    }}>Life</Scroll.Link>
                </Nav.Link> */}
                <Nav.Link className="nav-item">
                    <Scroll.Link to="future" smooth={"easeInOutQuint"} duration={1500} offset={window.outerWidth < 576 ? -255 : 0} onClick={() => {
                        updateState(false);
                    }}>Future</Scroll.Link>
                </Nav.Link>
                <Nav.Link className="nav-item">
                    <Scroll.Link to="contact" smooth={"easeInOutQuint"} duration={1500} offset={window.outerWidth < 576 ? -255 : 0} onClick={() => {
                        updateState(false);
                    }}>Contact</Scroll.Link>
                </Nav.Link>
                <Nav.Link href="https://yutan9.github.io/" target="_blank" className="nav-item">
                    Full Page
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
};

export default Bar;