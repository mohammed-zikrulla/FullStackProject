import React from "react";
import { getAllMovies } from "../apiCalls/movies";
import { useEffect } from "react";
import { setMovies } from "../../Redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import CardFromAntD from "../components/CardFromAntD";
import { Flex } from "antd";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  console.log(movies);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await getAllMovies();
      dispatch(setMovies(response.data.data));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Flex wrap gap="large">
      {movies.map((movie) => (
        <CardFromAntD
          key={movie._id}
          poster={movie.poster}
          title={movie.title}
          description={movie.description}
        /> 
      ))}
    </Flex>
  );
}

export default Home;
