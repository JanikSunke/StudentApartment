import { useContext, useState } from 'react';
import { Modal, InputGroup, Form, Button } from 'react-bootstrap';
import { StateContext } from '../StateProvider';


export default function ResetPassword() {
    const [modal, setModal] = useContext(StateContext);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const resetHandler = (event) => {
        setShowSuccessMessage(true);
        setModal({...modal, email: document.getElementById('resetPasswordEmail').value, password: "resetPassword123" })
    }

    return (
        <Modal show={modal.resetPassword} onHide={() => setModal({ ...modal, resetPassword: false })}>
            <Modal.Header closeButton>RESET PASSWORD</Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Email"
                        aria-label="Email"
                        id="resetPasswordEmail"
                    />
                </InputGroup>
                <Button id="resetModalBtn" onClick={resetHandler} >Reset password</Button>
                {showSuccessMessage===true && <p className="text-success">You password is reset to <code>resetPassword123</code>!</p> }
            </Modal.Body>
        </Modal>
    )
}