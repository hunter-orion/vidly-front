import { Box, Text } from "@chakra-ui/react";
import UseMovies from "../hooks/UseMovies";

const GetMovies = () => {
  const { movies, error } = UseMovies();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Box as="ul" listStyleType="none">
        {movies.map((movie) => (
          <Box as="li" key={movie._id} padding={4} fontSize={30}>
            <Text fontWeight="bold">Title: {movie.title}</Text>
            Genre: {movie.genre.name}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GetMovies;
