import { Container, Form, DropdownButton, Dropdown, Stack, Row, Col, Button } from "react-bootstrap";


export default function listProperty() {

    return (
        <Container>
            <h1>List your property</h1>
            <Stack direction="horizontal" gap={3} className="mb-3">
                <p className="m-2">Address</p>
                <Form.Control
                    placeholder="Search Address"
                    aria-label="Address"
                    id="address"
                />
                <p className="m-2" >Category</p>
                <DropdownButton id="dropdown-basic-button" title="Choose Category">
                    <Dropdown.Item href="#/action-1">Apartment</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">House</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Tent</Dropdown.Item>
                </DropdownButton>
            </Stack>
            <Form.Group className="mb-3">
                <Form.Label>Upload Images...</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Rooms*</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Size*</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Monthly Rent*</Form.Label>
                        <Form.Control type="number" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Deposit*</Form.Label>
                        <Form.Control type="number" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Rental Period*</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Move-in price*</Form.Label>
                        <Form.Control type="number" placeholder="" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Move-in date*</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Form.Group>
                    <Form.Check type={'checkbox'} label="Balcony" />
                    <Form.Check type={'checkbox'} label="Pet-friendly" />
                    <Form.Check type={'checkbox'} label="Elevator" />
                    <Form.Check type={'checkbox'} label="Students only" />
                    <Form.Check type={'checkbox'} label="Parking" />
                    <h2>Contact options</h2>
                    <Form.Check type={'checkbox'} label="Message via Studentapartments" />
                    <Form.Check type={'checkbox'} label="Phone Call" />
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Title*</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description*</Form.Label>
                        <Form.Control type="textarea" placeholder="" style={{ height: '200px' }} />
                    </Form.Group>
                    <Button>Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}