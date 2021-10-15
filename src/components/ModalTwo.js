import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ModalTwo() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Button variant="primary" onClick={handleShow}>
          Fun Fact 2
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Fun Fact #2</Modal.Title>
          </Modal.Header>
          <Modal.Body>I used to ride my bike everyday when I was a child</Modal.Body>
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

export default ModalTwo;