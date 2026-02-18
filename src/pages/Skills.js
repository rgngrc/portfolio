import { Container, ListGroup, Image } from 'react-bootstrap';


function Skills() {
    return (
        <Container className="mt-5">
            <h1>My Skills</h1>

            <ListGroup>
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>PHP & MySQL</ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Skills;
