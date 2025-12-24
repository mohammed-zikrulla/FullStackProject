import React from "react";
import TableFromAntD from "../../components/TableFromAntD";
import { getAllMovies } from "../../apiCalls/movies";
import MovieForm from "./MovieFrom";
import { useEffect } from "react";

function MovieList() {
  useEffect(() => {
    fetchMoviesData();
  }, []);

  const [moviesData, setMoviesData] = React.useState([]);

  const fetchMoviesData = async () => {
    const response = await getAllMovies();
    setMoviesData(response.data.data);
  };

  return (
    <>
      <TableFromAntD moviesData={moviesData} />
      <MovieForm getData={fetchMoviesData}/>
    </>
  );
}

export default MovieList;
