import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./MovieDetails.css";
import BookingForm from "./BookingForm";

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const docRef = doc(db, "movies", id);

      // const docRef2 = doc(db, "movies", 'MTficRwVhBMOtkwT04Rz');
      // const docSnap2 = await getDoc(docRef2);
      // console.log(docSnap2.data())
      
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setMovie(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie)
    return (
      <p style={{ textAlign: "center", fontSize: "25px" }}>
        Fetching your movie details...
      </p>
    );

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="movie-details-header">
          <h2>{movie.name}</h2>
          <p>
            <strong>Director:</strong> {movie.director}
          </p>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Release Date:</strong> {movie.releaseDate}
          </p>
          <p>
            <strong>Language:</strong> {movie.language}
          </p>
          <p>
            <strong>IMDB Rating:</strong> {movie.imdbRating}
          </p>
          <p>
            <strong>Show timings:</strong> {movie.showtime}
            {/* {console.log(movie.showtime)} */}
          </p>
        </div>
        <div className="movie-details-body">
          <img src={movie.poster} alt={movie.name} className="movie-poster" />

          <img
            src={movie.posterTwo}
            alt={movie.name}
            className="movie-poster"
          />
          <img
            src={movie.posterThree}
            alt={movie.name}
            className="movie-poster"
          />
          <img
            src={movie.heroImage}
            alt={movie.name}
            className="movie-poster"
          />
        </div>
        <p>{movie.description}</p>
        {movie.trailerLink && (
          <div className="trailer-link">
            <strong>Trailer Link:</strong>{" "}
            <a
              href={movie.trailerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {movie.trailerLink}
            </a>
          </div>
        )}
      </div>

      <br />
      <hr></hr>

      <BookingForm movie={movie} />
    </div>
  );
};

export default MovieDetails;
