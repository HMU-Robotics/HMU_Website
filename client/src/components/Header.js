import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import React, { useContext } from 'react';
import LanguageContext from '../hooks/LanguageContext';

function Header() {

  const { language, setLanguage } = useContext(LanguageContext);

  return (
<Navbar className='Navbar' collapseOnSelect expand="lg" variant="dark">
  <Container>
    <div className='HeaderLogo'>
      <a href='/' className='img-tag'>
        <img id='Logo' src='/Logos/Logo2.png' alt='Logo' />
      </a>
    </div>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="nav">
        <div className='nav-links'>
          <Nav.Link className='nav-link' eventKey={1} href="/">Home</Nav.Link>
          <Nav.Link className='nav-link' eventKey={2} href="/Members">Members</Nav.Link>
          <Nav.Link className='nav-link' eventKey={4} href="/Supporters">Supporters</Nav.Link>
          <Nav.Link className='nav-link' eventKey={5} href="/Eurobot">Eurobot</Nav.Link>
        </div>
        <div className='social'>
              <a href="https://www.facebook.com/profile.php?id=100075598827639" target="_blank" rel="noopener noreferrer"><svg id='facebook' fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="32px" height="32px"><path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"/></svg></a>
              <a href="https://www.instagram.com/hmuroboticsclub/" target="_blank" rel="noopener noreferrer"><svg id='instagram'fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="32px" height="32px"><path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"/></svg></a>
              <a href='https://www.linkedin.com/in/robotics-club-330165227/' target="_blank" rel="noopener noreferrer"><svg id='linkedin' fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="32px" height="32px"><path d="M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z"/></svg></a>
              <a href='https://www.youtube.com/channel/UChI8Sm95Zt7CYUcYc63ac-w' target="_blank" rel="noopener noreferrer"><svg id='youtube' fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="32px" height="32px"><path d="M 2.488281 3.011719 C 1.664063 3.011719 0.988281 3.6875 0.988281 4.511719 L 0.988281 11.511719 C 0.988281 12.335938 1.664063 13.011719 2.488281 13.011719 L 13.488281 13.011719 C 14.308594 13.011719 14.988281 12.335938 14.988281 11.511719 L 14.988281 4.511719 C 14.988281 3.6875 14.3125 3.011719 13.488281 3.011719 Z M 2.488281 4.011719 L 13.488281 4.011719 C 13.769531 4.011719 13.988281 4.230469 13.988281 4.511719 L 13.988281 11.511719 C 13.988281 11.792969 13.769531 12.011719 13.488281 12.011719 L 2.488281 12.011719 C 2.207031 12.011719 1.988281 11.792969 1.988281 11.511719 L 1.988281 4.511719 C 1.988281 4.230469 2.207031 4.011719 2.488281 4.011719 Z M 6 4.992188 L 6 11.011719 L 11 8 Z M 7 6.757813 L 9.0625 8 L 7 9.242188 Z"/></svg></a>
        </div>
        <div className='flags'>
          {language === "greek" && <a onClick={() => setLanguage('english')}><img src='/social/flags/united-kingdom-flag-uk.svg'></img></a>}
          {language === "english" && <a onClick={() => setLanguage('greek')}><img src='/social/flags/greece-flag.svg'></img></a>}
        </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header;