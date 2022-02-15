import Movie from './Movie';

function MovieList(props) {
  return (
    <>
      {props.movies.map((ele) => {
        return (
            <Movie key={ele.id} movie={ele}/>
        );
      })}
    </>
  );
}

export default MovieList;
