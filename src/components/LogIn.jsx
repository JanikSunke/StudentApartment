import { useContext } from 'react';
import { Modal, InputGroup, Form, Button } from 'react-bootstrap';
import { StateContext } from '../StateProvider';


export default function LogIn() {
    const [modal, setModal] = useContext(StateContext);

    const logInHandler = (event) => {
        if (document.getElementById('email').value === "admin" && document.getElementById('password').value === "admin") {
            setModal({...modal, logIn: false, adminLoggedIn: true })
        } else if (document.getElementById('email').value === modal.email && document.getElementById('password').value === modal.password) {
            setModal({...modal, logIn: false, loggedIn: true })
        }
    }

    return (
        <Modal show={modal.logIn} onHide={() => setModal({ ...modal, logIn: false })}>
            <Modal.Header closeButton>LOG IN</Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Email"
                        aria-label="Email"
                        id="email"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Password"
                        aria-label="Password"
                        id="password"
                    />
                </InputGroup>
                <Button onClick={logInHandler} >Log In</Button>
                <Button onClick={() => setModal({...modal, createAccount: true, logIn: false })} variant="link">Forgot Password?</Button>
            </Modal.Body>
        </Modal>
    )
}