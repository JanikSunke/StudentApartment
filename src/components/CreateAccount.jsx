import { useContext } from 'react';
import { Modal, InputGroup, Form, Button } from 'react-bootstrap';
import { StateContext } from '../StateProvider';


export default function CreateAccount() {
    const [modal, setModal] = useContext(StateContext);

    return (
        <Modal show={modal.createAccount} onHide={() => setModal({ ...modal, createAccount: false })}>
            <Modal.Header closeButton>CREATE ACCOUNT</Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Full name*"
                        aria-label="Fullname"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Email*"
                        aria-label="Email"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Password*"
                        aria-label="Password"
                    />
                </InputGroup>
                <p>A minimum of 8 characters is required</p>
                <Form.Check
                    type={'checkbox'}
                    id={'terms'}
                    label={'I agree to terms of use'}
                />
                <p>You must accept the <a href="">Terms and conditions</a></p>
                <Button className="m-r-2">Sign up</Button>
                Already have an account?
                <Button onClick={() => setModal({createAccount: false, logIn: true })} variant="link">Log in here</Button>
            </Modal.Body>
        </Modal>
    )
}