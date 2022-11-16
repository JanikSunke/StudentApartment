import { faBuilding, faBuildingUser, faDoorClosed, faHome, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Image, Row, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function () {

    return (
        <Container>
            <h1>Ready to find your perfect apartment?</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Row>
                <Col>
                    <Image fluid  src='copenhagen.jpg' />
                    <p>Copenhagen</p>
                </Col>
                <Col>
                    <Image fluid  src='odense.jpg' />
                    <p>Odense</p>
                </Col>
                <Col>
                    <Image fluid src='aarhus.jpg' />
                    <p>Aarhus</p>
                </Col>
            </Row>
            <h2>Categories</h2>
                <Button variant="light" className='m-2'>
                    <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                    Apartments
                </Button>
                <Button variant="light" className='m-2'>
                    <FontAwesomeIcon icon={faDoorClosed}></FontAwesomeIcon>
                    Rooms
                </Button>
                <Button variant="light" className='m-2'>
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                    Houses
                </Button>
                <Button variant="light" className='m-2'>
                    <FontAwesomeIcon icon={faBuildingUser}></FontAwesomeIcon>
                    All Properties
                </Button>
        </Container>
    )
}