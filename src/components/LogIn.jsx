import { useContext } from 'react';
import { Modal, InputGroup, Form, Button } from 'react-bootstrap';
import { StateContext } from '../StateProvider';


export default function LogIn() {
    const [modal, setModal] = useContext(StateContext);

    const logInHandler = (event) => {
        if (document.getElementById('email').value !== "" && document.getElementById('password').value !== "") {
            setModal({ logIn: false, loggedIn: true })
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
                <Button onClick={() => setModal({ createAccount: true, logIn: false })} variant="link">Forgot Password?</Button>
            </Modal.Body>
        </Modal>
    )
}