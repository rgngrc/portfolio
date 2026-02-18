import { Container, Image } from 'react-bootstrap';
import homePic from '../img/home.jpg';

function Home() {
    return (
        <div
            className="hero-section"
            style={{ backgroundImage: `url(${homePic})` }}
        >
            <Container className="hero-content text-white text-center">
                <h1>Welcome to My Portfolio!</h1>
                <p>
                    Dangal greetings! I am Regina Grace Ayes, a 3rd year BSIT student
                    from University of Cabuyao, aspiring to become a Web Developer.
                </p>
            </Container>
        </div>
    );
}

export default Home;
