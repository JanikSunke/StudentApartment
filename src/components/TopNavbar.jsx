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
    <Navbar expand="lg" style={{backgroundColor: "#f4f3c1"}}>
      <Container>
        <Navbar.Brand href=""><FontAwesomeIcon icon={faBuilding} style={{color: "#f4c51e"}}/> Student Apartments</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Link to="/StudentApartment/" className='text-secondary m-2' style={{ textDecoration: 'none' }} ><span id="homeBtn">Home</span></Link>
            {modal.adminLoggedIn && <Link to="/StudentApartment/listProperty" className='text-secondary m-2' style={{ textDecoration: 'none' }}><span id="listPropertyBtn">List your property</span></Link>}
            {(modal.loggedIn || modal.adminLoggedIn) && <Link to="/StudentApartment/propertiesForRent" className='text-secondary m-2' style={{ textDecoration: 'none' }}><span id="propertyForSaleBtn">Properties for rent</span></Link>}
            {(modal.loggedIn || modal.adminLoggedIn) && <Link to="/StudentApartment/myProfile" className='text-secondary m-2' style={{ textDecoration: 'none' }}><span id="myProfileBtn">My Profile</span></Link>}
            {(modal.loggedIn || modal.adminLoggedIn) && <Link className='text-secondary m-2' style={{ textDecoration: 'none' }} onClick={() => setModal({...modal, loggedIn: false})}><span id="logoutBtn">Logout</span></Link>}
            {(!modal.loggedIn && !modal.adminLoggedIn) && <Link className='text-secondary m-2'  style={{ textDecoration: 'none' }} onClick={() => setModal({...modal, createAccount: true})}><span id="createAccountBtn">Create an account</span></Link>}
            {(!modal.loggedIn && !modal.adminLoggedIn) && <Link className='text-secondary m-2' style={{ textDecoration: 'none' }} onClick={() => setModal({...modal, logIn: true})}><span id="loginBtn">Log In</span></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
