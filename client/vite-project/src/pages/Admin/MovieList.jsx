import React, { useEffect, useState } from "react";
import TableFromAntD from "../../components/TableFromAntD";
import { getAllMovies } from "../../apiCalls/movies";
import MovieForm from "./MovieFrom";
import DeleteMovieModal from "./DeleteMovieModal";

function MovieList() {
  const [moviesData, setMoviesData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [formType, setFormType] = useState("add");

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const fetchMoviesData = async () => {
    const response = await getAllMovies();
    setMoviesData(response.data.data);
  };

  return (
    <>
      <TableFromAntD
        moviesData={moviesData}
        setIsModalOpen={setIsModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        setSelectedMovie={setSelectedMovie}
        setFormType={setFormType}
      />

      {isModalOpen && (
        <MovieForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedMovie={selectedMovie}
          formType={formType}
          setSelectedMovie={setSelectedMovie}
          getData={fetchMoviesData}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteMovieModal
          isDeleteModalOpen={isDeleteModalOpen}
          selectedMovie={selectedMovie}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setSelectedMovie={setSelectedMovie}
          getData={fetchMoviesData}
        />
      )}
    </>
  );
}

export default MovieList;
