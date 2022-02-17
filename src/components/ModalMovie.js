import { Button, Modal, Form, Card } from "react-bootstrap/";
import { useRef } from "react";
// because the form and user input is inside the modal

function ModalMovie(props) {
  const commentRef = useRef();

  function handleComment(e) {
    e.preventDefault();
    console.log(commentRef.current.value);

    const comment = commentRef.current.value;
    const newMovie = { ...props.chosenMovie, comment };
    // console.log(newMovie)
    // console.log(props.chosenMovie)
    props.updateMovies(newMovie, props.chosenMovie.id);
  }

  async function handleAddFav(e, movie) {

    e.preventDefault();
    const dataToBeSent = {
      title: movie.title,
      overview: movie.summary,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      comment: movie.comment,
    };
    const url = `${process.env.REACT_APP_SERVER}/addMovie`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToBeSent),
    });
    const data = await response.json();
    console.log(response.status);
    console.log(data);
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <img
          style={{ width: "300px" }}
          src={`https://image.tmdb.org/t/p/w300/${props.chosenMovie.poster_path}`}
          alt=""
        />
        <Modal.Body>{props.chosenMovie.overview}</Modal.Body>
        <Modal.Footer>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <p>
                {" "}
                {props.chosenMovie.comment
                  ? props.chosenMovie.comment
                  : "no comment added"}
              </p>

              <Form.Control
                ref={commentRef}
                type="text"
                placeholder="write your comment"
              />

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleComment}>
              Submit
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                handleAddFav(e,props.chosenMovie);
              }}
            >
              Add to favorites
            </Button>
          </Form>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie;
