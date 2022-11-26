import { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Image, ButtonGroup, Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export default function SearchProperty() {
    let { value } = useParams();
    const [searchOdense, setSearchOdense] = useState(false);
    const [searchCopenhagen, setSearchCopenhagen] = useState(false);

    useEffect(() => {
        if (value !== undefined) {
            if (value === "") {
                setSearchOdense(true)
                setSearchCopenhagen(true)
            } else if (value.toLowerCase() === "odense") {
                setSearchOdense(true)
            } else if (value.toLowerCase() === "københavn") {
                setSearchCopenhagen(true)
            }
        } else {
            setSearchOdense(true)
            setSearchCopenhagen(true)
        }
    }, [])

    const searchHandler = (event) => {
        if (event.target.value === "") {
            setSearchOdense(true)
            setSearchCopenhagen(true)
        } else if (event.target.value.toLowerCase() === "odense") {
            setSearchOdense(true)
        } else if (event.target.value.toLowerCase() === "københavn") {
            setSearchCopenhagen(true)
            setSearchOdense(false)
        } else {
            setSearchOdense(false)
            setSearchCopenhagen(false)
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Control
                        placeholder="Search"
                        defaultValue={value}
                        className="mt-5 mx-5"
                        onChange={searchHandler}
                    />
                    <Row>
                        <Col >
                            <Form.Check type={'checkbox'} label="Apartment" name="apartment" />
                            <Form.Check type={'checkbox'} label="Room" name="room" />
                            <Form.Check type={'checkbox'} label="House" name="house" />
                            <Form.Check type={'checkbox'} label="All Properties" name="allProperties"/>
                        </Col>
                        <Col>
                            <p>Price</p>
                            <Form.Range value={0}/>
                            <p>Size</p>
                            <Form.Range value={0}/>
                        </Col>
                    </Row>
                    <hr></hr>
                    <p>Location</p>
                    <Image fluid width={"300px"} src='map.png' />
                    <hr></hr>
                    <Row>
                        <Col>
                            <p>Other</p>
                            <Form.Check type={'checkbox'} label="Balcony" name="balcony"/>
                            <Form.Check type={'checkbox'} label="Pet-friendly" name="pet" />
                            <Form.Check type={'checkbox'} label="Elevator" name="elevator" />
                            <Form.Check type={'checkbox'} label="Students only" name="students"/>
                            <Form.Check type={'checkbox'} label="Parking" name="parking"/>
                        </Col>
                        <Col>
                            <p>Take over date</p>
                            <Form.Group className="mb-3">
                            <Form.Control type="date" placeholder="" name="date"/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h1>Properties for rent</h1>
                    <p><Link to="/">Home</Link> - Properties for rent</p>
                    <ButtonGroup>
                        <Button variant="outline-secondary" >Copenhagen</Button>
                        <Button variant="outline-secondary" >Aarhus</Button>
                        <Button variant="outline-secondary" >Aalborg</Button>
                        <Button variant="outline-secondary" >Odense</Button>
                        <Button variant="outline-secondary" >Kolding</Button>
                        <Button variant="outline-secondary" >Vejle</Button>
                        <Button variant="outline-secondary" >Herning</Button>
                    </ButtonGroup>
                    {searchOdense && <><Row className="my-3">
                        <Col>
                            <Card>
                            <Card.Img variant="top" src="apartment2.jpg" />
                            <Card.Body>
                                <Card.Text>
                                <p>Nørregade</p>
                                10.000 kr
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="apartment1.jpg" />
                            <Card.Body>
                                <Card.Text>
                                <p>Roesgårdvej</p>
                                6.500 kr
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="apartment3.jpg" />
                            <Card.Body>
                                <Card.Text>
                                <p>Nordvej</p>
                                11.500 kr
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="apartment3.jpg" />
                            <Card.Body>
                                <Card.Text>
                                <p>Svendborgvej</p>
                                9.500 kr
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="apartment4.jpg" />
                            <Card.Body>
                                <Card.Text>
                                <p>Grønnevej</p>
                                9.000 kr
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="apartment2.jpg" />
                            <Card.Body>
                                <Card.Text>
                                <p>Brummevænget</p>
                                8.000 kr
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row></>}
                    {searchCopenhagen && 
                        <Row className="mt-3">
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="apartment3.jpg" />
                            <Card.Body>
                                <Card.Text>
                                <p>Amagervej</p>
                                13.500 kr
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="apartment4.jpg" />
                            <Card.Body>
                                <Card.Text>
                                <p>Rådhusvej</p>
                                14.000 kr
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src="apartment2.jpg" />
                            <Card.Body>
                                <Card.Text>
                                <p>Tuborgvænget</p>
                                10.000 kr
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    }
                </Col>


            </Row>
        </Container>
    )
}