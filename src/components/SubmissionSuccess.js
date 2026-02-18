import { Container, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function SubmissionSuccess() {

    const location = useLocation();
    const { name, email, message } = location.state || {};

    return (
        <Container className="mt-5">
            <Card className="p-4">
                <h2>Thank you, {name}!</h2>
                <p>Your message has been sent.</p>

                <hr />

                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Message:</strong> {message}</p>
            </Card>
        </Container>
    );
}

export default SubmissionSuccess;
