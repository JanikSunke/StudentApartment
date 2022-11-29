import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';

export default function ContractPage() {
    const [sign, setSign] = useState(false)

    return (
        <Container>
            <Row>
                <Col>
                <Stack>
                <div className='m-4' style={{border: "solid 1px", width: "70px", height: "100px"}}>Offer</div>
                <div className='m-4' style={{border: "solid 1px", width: "70px", height: "100px"}}>Offer</div>
                <div className='m-4' style={{border: "solid 1px", width: "70px", height: "100px"}}>Offer</div>
                </Stack>
                </Col>
                <Col>
                {!sign && 
                <div className='m-4' style={{border: "solid 1px", width: "80%", height: "100%"}}>
                <h3>Nørrevej 16</h3>
                <p className="m-4">Lorem ipsum dolor sit amet. Et blanditiis quia et necessitatibus doloribus aut reprehenderit quisquam ea commodi quis cum laborum placeat a maiores nihil sit veritatis sapiente. Sit iusto exercitationem qui tenetur provident ut iste aspernatur sed amet nihil eos doloribus reprehenderit et ipsam odit!Qui deleniti expedita est expedita reiciendis non praesentium sapiente nam galisum totam eum quia quisquam. Id voluptas incidunt id voluptas repellat et repellendus enim aut neque aliquid et architecto ipsam.</p>
                <Button id="signContractBtn" style={{float: "right"}} onClick={() => setSign(true)}>Sign</Button>
                <input id="contractName" style={{float: "right"}} type="textarea" ></input>
                </div>
                }
                {sign && 
                <p>You have accepted Nørrevej 16</p>}
                </Col>
            </Row>


        </Container>
    )

}