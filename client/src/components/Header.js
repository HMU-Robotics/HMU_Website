import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"

function Header() {
  return (
    <Navbar className='Navbar' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img id='Logo' src='Logos/Logo2.png' alt='Logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey={1} href="/About">About</Nav.Link>
            <Nav.Link eventKey={2} href="/Gallery">Gallery</Nav.Link>
            <Nav.Link eventKey={3} href="/Members">Members</Nav.Link>
            <Nav.Link eventKey={4} href="/Projects">Projects</Nav.Link>
            <Nav.Link eventKey={5} href="/OnBoarding">OnBoarding</Nav.Link>
            <Nav.Link eventKey={6} href="/Supporters">Supporters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;