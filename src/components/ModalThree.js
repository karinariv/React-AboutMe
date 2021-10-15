import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ModalThree() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Button variant="primary" onClick={handleShow}>
          Fun Fact 3
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Fun Fact #3</Modal.Title>
          </Modal.Header>
          <Modal.Body>I am vegetarian</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Cool!
            </Button>
            <Button variant="primary" onClick={handleClose}>
              I didn't ask
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
}

export default ModalThree;