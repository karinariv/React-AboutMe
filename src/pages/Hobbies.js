import React from 'react';
import TheOA from '../img/TheOA.jpg';
import Card from 'react-bootstrap/Card';
import books from '../img/books.jpg';
import talking from '../img/talking.jpg';

function Hobbies() {
    return (
        <div className="container text-center">
            <h1 className="padding">My Hobbies</h1>
            <div className="row">
                <Card className="padding" style={{ width: '18rem' }}>
                    <Card.Img className="card-height" variant="top" src={TheOA} />
                    <Card.Body>
                        <Card.Title>Movies</Card.Title>
                        <Card.Text>
                        I like to watch movies or series.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="padding" style={{ width: '18rem' }}>
                    <Card.Img className="card-height" variant="top" src={books} />
                    <Card.Body>
                        <Card.Title>Books</Card.Title>
                        <Card.Text>
                        I'm pleased to read a good story
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="padding" style={{ width: '18rem' }}>
                    <Card.Img className="card-height" variant="top" src={talking} />
                    <Card.Body>
                        <Card.Title>Talking to friends</Card.Title>
                        <Card.Text>
                        A good conversation is the best. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Hobbies;