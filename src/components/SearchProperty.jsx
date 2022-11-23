import { Container, Form, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function SearchProperty() {
    let { value } = useParams();


    return (
        <Container>
            <Row>
                <Col>
                    <Form.Control
                        placeholder="Search"
                        defaultValue={value}
                    />
                </Col>
                <Col>
                    <h1>Properties for rent</h1>
                </Col>
            </Row>
        </Container>
    )
}