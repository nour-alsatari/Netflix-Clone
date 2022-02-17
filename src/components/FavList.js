import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function FavList(props) {

function handleDelete (){
    
}

  return (
    <>
      <h1> This is a favorite list of my movies</h1>
      {props.favListData &&
        props.favListData.map((movie) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview}</Card.Text>
                  <Card.Text>Released in {movie.release_date}</Card.Text>
                  <Card.Text>
                    {" "}
                    {movie.comment
                      ? movie.comment
                      : "no comment added"}
                  </Card.Text>
                  <Button onClick={handleDelete}>Delete </Button>
                  <Button>Update </Button>

                </Card.Body>
              </Card>
            </>
          );
        })}
    </>
  );
}

export default FavList;
