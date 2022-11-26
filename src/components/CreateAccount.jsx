import { useContext } from 'react';
import { Modal, InputGroup, Form, Button } from 'react-bootstrap';
import { StateContext } from '../StateProvider';


export default function CreateAccount() {
    const [modal, setModal] = useContext(StateContext);
    const submitHandler = () => {
        if (document.getElementById('fullname').value !== "" && document.getElementById('createEmail').value !== "" && document.getElementById('createPassword').value !== "" && document.getElementById('terms').value !== false && document.getElementById('createPassword').value.length >= 8) {
            setModal({...modal, createAccount: false, logIn: false, email: document.getElementById('createEmail').value, password: document.getElementById('createPassword').value})
        }
    }
    return (
        <Modal show={modal.createAccount} onHide={() => setModal({ ...modal, createAccount: false })}>
            <Modal.Header closeButton>CREATE ACCOUNT</Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Full name*"
                        aria-label="Fullname"
                        id="fullname"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Email*"
                        aria-label="Email"
                        id="createEmail"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Password*"
                        aria-label="Password"
                        id="createPassword"
                    />
                </InputGroup>
                <p>A minimum of 8 characters is required</p>
                <Form.Check
                    type={'checkbox'}
                    label={'I agree to terms of use'}
                    id="terms"
                />
                <p>You must accept the <a href="/">Terms and conditions</a></p>
                <Button onClick={submitHandler} className="m-r-2">Sign up</Button>
                Already have an account?
                <Button onClick={() => setModal({ createAccount: false, logIn: true })} variant="link">Log in here</Button>
            </Modal.Body>
        </Modal>
    )
}