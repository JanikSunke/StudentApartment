import { faBuilding, faBuildingUser, faDoorClosed, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value
        navigate({ pathname: '/StudentApartment/propertiesForRent/' + searchValue})
    }

    return (
        <Container>
            <h1>Ready to find your perfect apartment?</h1>
            <Form onSubmit={handleSearch}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                <Form.Control
                aria-label="Search"
                aria-describedby="basic-addon1"
                name="search"
                />
            </InputGroup>
            </Form>
            <Row>
                <Col>
                    <Link to="/StudentApartment/propertiesForRent/københavn" className='text-black m-2' style={{ textDecoration: 'none' }}>
                        <Image fluid src='copenhagen.jpg' />
                        <p>Copenhagen</p>
                    </Link>
                </Col>
                <Col>
                <Link to="/StudentApartment/propertiesForRent/odense" className='text-black m-2' style={{ textDecoration: 'none' }}>
                        <Image fluid src='odense.jpg' />
                        <p>Odense</p>
                    </Link>
                </Col>
                <Col>
                    <Image fluid src='aarhus.jpg' />
                    <p>Aarhus</p>
                </Col>
            </Row>
            <h2>Categories</h2>
                <Button variant="light" className='m-2'>
                    <Link className='text-dark m-2' style={{ textDecoration: 'none' }} to="/StudentApartment/propertiesForRent">
                    <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                    Apartments
                    </Link>
                </Button>
                <Button variant="light" className='m-2'>
                    <Link className='text-dark m-2' style={{ textDecoration: 'none' }} to="/StudentApartment/propertiesForRent">
                    <FontAwesomeIcon icon={faDoorClosed}></FontAwesomeIcon>
                    Rooms
                    </Link>
                </Button>
                <Button variant="light" className='m-2'>
                    <Link className='text-dark m-2' style={{ textDecoration: 'none' }} to="/StudentApartment/propertiesForRent">
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                    Houses
                    </Link>
                </Button>
                <Button variant="light" className='m-2'>
                    <Link className='text-dark m-2' style={{ textDecoration: 'none' }} to="/StudentApartment/propertiesForRent">
                    <FontAwesomeIcon icon={faBuildingUser}></FontAwesomeIcon>
                    All Properties
                    </Link>
                </Button>
        </Container>
    )
}