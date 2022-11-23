import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StateContext } from '../StateProvider';
import { Link } from 'react-router-dom';

export default function TopNavbar() {
  const [modal, setModal] = useContext(StateContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href=""><FontAwesomeIcon icon={faBuilding} /> Student Apartments</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Link to="/StudentApartment/" className='text-secondary m-2' style={{ textDecoration: 'none' }} >Home</Link>
            {modal.loggedIn && <Link to="/StudentApartment/listProperty" className='text-secondary m-2' style={{ textDecoration: 'none' }}>List your property</Link>}
            {modal.loggedIn && <Link to="/StudentApartment/propertiesForRent" className='text-secondary m-2' style={{ textDecoration: 'none' }}>Properties for rent</Link>}
            {modal.loggedIn && <Link to="/StudentApartment/myProfile" className='text-secondary m-2' style={{ textDecoration: 'none' }}>My Profile</Link>}
            {!modal.loggedIn && <Link className='text-secondary m-2' style={{ textDecoration: 'none' }} onClick={() => setModal({...modal, createAccount: true})}>Create an account</Link>}
            {!modal.loggedIn && <Link className='text-secondary m-2' style={{ textDecoration: 'none' }} onClick={() => setModal({...modal, logIn: true})}>Log In</Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
