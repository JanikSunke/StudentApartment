import { faBuilding, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StateContext } from '../StateProvider';

function TopNavbar() {
  const [modal, setModal] = useContext(StateContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href=""><FontAwesomeIcon icon={faBuilding} /> Student Apartments</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/listProperty">List your property</Nav.Link>
            <Nav.Link href="" onClick={() => setModal({...modal, createAccount: true})}>Create an account</Nav.Link>
            <Nav.Link href="" onClick={() => setModal({...modal, logIn: true})}>Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;