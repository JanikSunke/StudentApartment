import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';

export default function MessagePage() {

    return (
        <Container>
            <Row>
                <Col>
                <Stack>
                <h1><FontAwesomeIcon className='mx-2 bg-secondary text-white w-100' icon={faUserAlt}/></h1>
                <h1><FontAwesomeIcon className='mx-2 w-100' icon={faUserAlt}/></h1>
                <h1><FontAwesomeIcon className='mx-2 w-100' icon={faUserAlt}/></h1>
                <h1><FontAwesomeIcon className='mx-2 w-100' icon={faUserAlt}/></h1>
                </Stack>
                </Col>
                <Col>
                <h1><FontAwesomeIcon className='mx-2' icon={faUserAlt}/></h1>
                <input style={{float: "right"}} type="textarea" readOnly value={"Is Nørrevej Available?"} ></input>
                <br></br>
                <br></br>
                <br></br>
                <input style={{float: "left"}} type="textarea" readOnly value={"Yes"} ></input>
                <br></br>
                <br></br>
                <br></br>
                <Button style={{float: "right"}}>send</Button>
                <input style={{float: "right"}} type="textarea" ></input>
                </Col>
            </Row>


        </Container>
    )

}