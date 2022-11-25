import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function SettingPage() {
    const [change, setChange] = useState(false)

    return (
        <Container>
            {!change && <>
                <Form.Group className="mb-3">
                <Form.Label>Change Password</Form.Label>
                <Form.Control type="text" placeholder="" name="deposit" id="change"/>
            </Form.Group>
            <Button onClick={() => {if (document.getElementById('change').value !== "") setChange(true)}}>Change Password</Button>
            </>}
            {change && <p>Your password has been changed</p>}
        </Container>
    )
}