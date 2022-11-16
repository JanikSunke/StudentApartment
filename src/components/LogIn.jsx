import { useContext } from 'react';
import { Modal, InputGroup, Form, Button, NavLink } from 'react-bootstrap';
import { StateContext } from '../StateProvider';


export default function () {
    const [modal, setModal] = useContext(StateContext);

    return (
        <Modal show={modal.logIn} onHide={() => setModal({...modal, logIn: false})}>
            <Modal.Header closeButton>LOG IN</Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button>Log In</Button>
                <Button variant="link">Forgot Password?</Button>
            </Modal.Body>
        </Modal>
    )
}