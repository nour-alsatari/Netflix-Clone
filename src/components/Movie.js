import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ModalMovie from "./ModalMovie";
import { useState } from "react";

function Movie(props) {
  const [show, setShow] = useState(false);
  const [chosenMovie, setChosenMovie] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  function handleShowModal(movie) {
    handleShow();
    setChosenMovie(movie);
  }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>{props.movie.overview}</Card.Text>
          <Card.Text>Released in {props.movie.release_date}</Card.Text>
          <Card.Text> {props.movie.comment ? props.movie.comment : "no comment added"}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              handleShowModal(props.movie)
            }}
          >
            more details{" "}
          </Button>
        </Card.Body>
      </Card>

    {
      chosenMovie && <ModalMovie
      show={show}
      handleClose={handleClose}
      chosenMovie={chosenMovie}
      updateMovies = {props.updateMovies}
    />
   
   }
        
    
    </>
  );
}

export default Movie;
