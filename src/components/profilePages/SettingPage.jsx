import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { StateContext } from '../../StateProvider';

export default function SettingPage() {
    const [change, setChange] = useState(false)
    const [modal, setModal] = useContext(StateContext);

    return (
        <Container>
            {!change && <>
                <Form.Group className="mb-3">
                <Form.Label>Change Password</Form.Label>
                <Form.Control type="text" placeholder="" name="deposit" id="change"/>
            </Form.Group>
            <Button onClick={() => {if (document.getElementById('change').value !== "") {setChange(true); setModal({...modal, password: document.getElementById('change').value})}}}>Change Password</Button>
            </>}
            {change && <p>Your password has been changed</p>}
        </Container>
    )
}