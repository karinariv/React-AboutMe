import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ModalOne() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Button variant="primary" onClick={handleShow}>
            Fun Fact 1
            </Button>
    
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Fun Fact #1</Modal.Title>
            </Modal.Header>
            <Modal.Body>I learned to read at an early age</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Cool
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalOne;