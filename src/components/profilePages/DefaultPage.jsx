import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Container, Form, Row, Stack } from 'react-bootstrap';

export default function DefaultPage() {

    return (
        <Container>
            <h1>Your Profile</h1>
            <h1 style={{textAlign: "left"}}><FontAwesomeIcon className='mx-2' icon={faUserLarge}></FontAwesomeIcon>Jens</h1>
            <Card  style={{textAlign: "left"}}>
                <p className='mx-2' >User Type</p>
            <Stack direction="horizontal">
            <Form.Check className='mx-2' type={'checkbox'} label="Individual" name="balcony"/>
            <Form.Check className='mx-2' type={'checkbox'} label="Couple" name="balcony"/>
            <Form.Check className='mx-2' type={'checkbox'} label="Family" name="balcony"/>
            </Stack>
            <Form.Group className="m-2">
                <Form.Label>Birthday</Form.Label>
                <Form.Control style={{width: "20%"}} type="date" placeholder="" name="date"/>
            </Form.Group>
            <p>Gender</p>
            <Stack direction="horizontal">
            <Form.Check className='mx-2' type={'checkbox'} label="Male" name="balcony"/>
            <Form.Check className='mx-2' type={'checkbox'} label="Female" name="balcony"/>
            </Stack>
            <p>Details</p>
            <Form.Group className="m-2">
                <Form.Label>About you</Form.Label>
                <Form.Control type="textarea" placeholder="" style={{ height: '100px' }} name="text"/>
            </Form.Group>
            </Card>
        </Container>
    )
}