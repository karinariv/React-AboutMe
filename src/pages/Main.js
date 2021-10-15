import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import myAvatar from '../img/myAvatar.png'


function Main() {
    return (
        <div className="container text-center">
            <h1 className="padding">Welcome to my <strong><em>About Me</em></strong> section</h1>
            {/* Card */}
            <div className="row">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img as={Image} variant="top" src={ myAvatar } />
                    <Card.Body>
                        <Card.Title>Karina</Card.Title>
                        <Card.Text>
                        Stay in this web page to discover more about me.
                        </Card.Text>
                        <Button variant="primary" href="/funfacts">Fun Facts</Button>
                    </Card.Body>
                </Card>
            </div>
            {/* Accordion */}
            <div className="container padding">
                <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>My name</Accordion.Header>
                        <Accordion.Body className="text-left">
                        I am Karina
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Interests</Accordion.Header>
                        <Accordion.Body className="text-left">
                        I like to listen to music and watch movies, sometimes I read books.<br />
                        I enjoy running and jogging from time to time. <br />
                        I've never been good at sports, I like to play them for fun anyway.<br />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}

export default Main;