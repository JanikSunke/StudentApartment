import { useContext, useState } from 'react';
import { Modal, InputGroup, Form, Button } from 'react-bootstrap';
import { StateContext } from '../StateProvider';


export default function LogIn() {
    const [modal, setModal] = useContext(StateContext);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const logInHandler = (event) => {
        setShowErrorMessage(false);
        if (document.getElementById('email').value === "admin" && document.getElementById('password').value === "admin") {
            setModal({...modal, logIn: false, adminLoggedIn: true })
        } else if (document.getElementById('email').value === modal.email && document.getElementById('password').value === modal.password) {
            setModal({...modal, logIn: false, loggedIn: true })
        }else{
            setShowErrorMessage(true);
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
                <Button id="loginModalBtn" onClick={logInHandler} >Log In</Button>
                <Button id="forgotPasswordBtn" onClick={() => setModal({...modal, resetPassword: true, logIn: false })} variant="link">Forgot Password?</Button>
                {showErrorMessage===true && <p className="text-danger">Wrong username or password!</p> }
            </Modal.Body>
        </Modal>
    )
}