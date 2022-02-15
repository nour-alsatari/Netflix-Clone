import { Button, Modal, Form, Card } from "react-bootstrap/";

function ModalMovie(props) {
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header closeButton>
          <Modal.Title>{props.ChosenMovie}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            width="100%"
            src={`https://image.tmdb.org/t/p/w300/${props.ChosenMovie}`}
            alt="movie"
          />
        </Modal.Body>
        <Modal.Footer>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Captions:</Form.Label>
          </Form.Group>
          <Button className="addBtn" variant="primary" type="submit">
            Add a Caption
          </Button>
          <Button variant="secondary" onClick={props.handleColse}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie;
