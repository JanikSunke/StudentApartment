import { useState } from "react";
import { Container, Form, Stack, Row, Col, Button } from "react-bootstrap";


export default function ListProperty() {
    const [submit, setSubmit] = useState(false)
    const [data, setData] = useState([])


    const submitHandler = (event) => {
        event.preventDefault();
        setSubmit(true)
        const form = document.getElementById('form');
        setData(data => [...data, 'Address' + form.elements['address'].value])
        setData(data => [...data, 'Category: ' + form.elements['category'].value])
        if (form.elements['file'].value !== "") setData(data => [...data, 'file' + form.elements['file'].value])
        setData(data => [...data, 'Rooms: ' + form.elements['rooms'].value])
        setData(data => [...data, 'Size: ' + form.elements['size'].value])
        setData(data => [...data, 'Rent: ' + form.elements['rent'].value])
        setData(data => [...data, 'Deposit' + form.elements['deposit'].value])
        setData(data => [...data, 'Period' + form.elements['period'].value])
        setData(data => [...data, 'Price' + form.elements['price'].value])
        setData(data => [...data, 'Date' + form.elements['date'].value])
        if (form.elements['balcony'].checked) setData(data => [...data, "Balcony"])
        if (form.elements['pet'].checked) setData(data => [...data, "Pet-friendly"])
        if (form.elements['elevator'].checked) setData(data => [...data, "Elevator"])
        if (form.elements['students'].checked) setData(data => [...data, "Students Only"])
        if (form.elements['parking'].checked) setData(data => [...data, 'parking'])
        if (form.elements['message'].checked) setData(data => [...data, 'message'])
        if (form.elements['phone'].checked) setData(data => [...data, 'phone'])
        setData(data => [...data, 'Title: ' + form.elements['title'].value])
        setData(data => [...data, 'Description: ' + form.elements['text'].value])
    }
    console.log(data)
    return (
        <Container>
            {!submit && <Form id="form">
                <h1>List your property</h1>
                <Stack direction="horizontal" gap={3} className="mb-3">
                    <p className="m-2">Address</p>
                    <Form.Control
                        placeholder="Search Address"
                        aria-label="Address"
                        id="address"
                        name="address"
                    />
                    <p className="m-2" >Category</p>
                    <Form.Select name="category">
                        <option>Category</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Tent">Tent</option>
                        
                    </Form.Select>
                </Stack>
                <Form.Group className="mb-3">
                    <Form.Label>Upload Images...</Form.Label>
                    <Form.Control type="file" name="file"/>
                </Form.Group>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Rooms*</Form.Label>
                                    <Form.Control type="number" placeholder="" name="rooms"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Size*</Form.Label>
                                    <Form.Control type="number" placeholder="" name="size"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Monthly Rent*</Form.Label>
                            <Form.Control type="number" placeholder="" name="rent"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Deposit*</Form.Label>
                            <Form.Control type="number" placeholder="" name="deposit"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rental Period*</Form.Label>
                            <Form.Control type="date" placeholder="" name="period"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Move-in price*</Form.Label>
                            <Form.Control type="number" placeholder="" name="price"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Move-in date*</Form.Label>
                            <Form.Control type="date" placeholder="" name="date"/>
                        </Form.Group>
                        <Form.Check type={'checkbox'} label="Balcony" name="balcony"/>
                        <Form.Check type={'checkbox'} label="Pet-friendly" name="pet" />
                        <Form.Check type={'checkbox'} label="Elevator" name="elevator" />
                        <Form.Check type={'checkbox'} label="Students only" name="students"/>
                        <Form.Check type={'checkbox'} label="Parking" name="parking"/>
                        <h2>Contact options</h2>
                        <Form.Check type={'checkbox'} label="Message via Studentapartments" name="message"/>
                        <Form.Check type={'checkbox'} label="Phone Call" name="phone"/>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Title*</Form.Label>
                            <Form.Control type="text" placeholder="" name="title"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description*</Form.Label>
                            <Form.Control type="textarea" placeholder="" id="descriptionField" style={{ height: '200px' }} name="text"/>
                        </Form.Group>
                        <Button id="listApartmentSubmit" type="submit" onClick={submitHandler}>Submit</Button>
                    </Col>
                </Row>
            </Form>}
            {submit && <div>
                <h1>Your data is received</h1>
                {data.map((datas) => {
                    return <p>{datas}</p>;
                })}
            </div>}
        </Container>
    )
}