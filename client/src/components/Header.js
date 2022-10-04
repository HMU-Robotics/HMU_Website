import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey={1} href="/About">About</Nav.Link>
            <Nav.Link eventKey={2} href="/Gallery">Gallery</Nav.Link>
            <Nav.Link eventKey={3} href="/Members">Members</Nav.Link>
            <Nav.Link eventKey={4} href="/Projects">Projects</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={5} href="/OnBoarding">OnBoarding</Nav.Link>
            <Nav.Link eventKey={6} href="/Supporters">Supporters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;