import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Comentar from "../Comentar";
import "./modal.css";

export default function ModalFilme({filmeId}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [filme, setFilme] = useState({});
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/marycamila184/movies/movies/80`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setFilme(response);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  // mostra mais ou menos da sinopse
  // eslint-disable-next-line no-unused-vars
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
          <Comentar/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
