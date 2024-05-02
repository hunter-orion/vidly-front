import { useEffect, useState } from "react";
import apiClientGet from "../services/api-client-get";
import Movie from "../entities/Movie";
import { CanceledError } from "axios";

const UseMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClientGet
      .get<Movie[]>("/api/movies", { signal: controller.signal })
      .then((res) => setMovies(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { movies, error };
};

export default UseMovies;
