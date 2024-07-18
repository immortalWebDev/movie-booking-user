// import React, { useEffect, useState } from 'react';
// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const querySnapshot = await getDocs(collection(db, 'movies'));
//       setMovies(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
//     };
//     fetchMovies();
//   }, []);

//   const classifyMoviesByCategory = () => {
//     const categorizedMovies = {
//       topMovies: [],
//       topRated: [],
//       superhero: [],
//       anime: [],
//     };

//     movies.forEach(movie => {
//       const showAs = movie.showas.toLowerCase();
      
//       if (showAs === 'top movies') {
//         categorizedMovies.topMovies.push(movie);
//       } else if (showAs === 'top rated') {
//         categorizedMovies.topRated.push(movie);
//       } else if (showAs === 'superhero') {
//         categorizedMovies.superhero.push(movie);
//       } else if (showAs === 'anime') {
//         categorizedMovies.anime.push(movie);
//       }
//     });

//     return categorizedMovies;
//   };

//   const categorizedMovies = classifyMoviesByCategory();

//   return (
//     <div>
//       <h1>Now Playing</h1>
//       <hr />

//       {/* Top Movies */}
//       {categorizedMovies.topMovies.length > 0 && (
//         <div>
//           <h3>Top Movies</h3>
//           <ul>
//             {categorizedMovies.topMovies.map(movie => (
//               <li key={movie.id}>
//                 <Link to={`/movie/${movie.id}`}>
//                   {movie.name} - {movie.showtime} 
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Top Rated */}
//       {categorizedMovies.topRated.length > 0 && (
//         <div>
//           <h3>Top Rated</h3>
//           <ul>
//             {categorizedMovies.topRated.map(movie => (
//               <li key={movie.id}>
//                 <Link to={`/movie/${movie.id}`}>
//                   {movie.name} - {movie.showtime} 
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Superhero */}
//       {categorizedMovies.superhero.length > 0 && (
//         <div>
//           <h3>Superhero</h3>
//           <ul>
//             {categorizedMovies.superhero.map(movie => (
//               <li key={movie.id}>
//                 <Link to={`/movie/${movie.id}`}>
//                   {movie.name} - {movie.showtime} 
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Anime */}
//       {categorizedMovies.anime.length > 0 && (
//         <div>
//           <h3>Anime</h3>
//           <ul>
//             {categorizedMovies.anime.map(movie => (
//               <li key={movie.id}>
//                 <Link to={`/movie/${movie.id}`}>
//                   {movie.name} - {movie.showtime} 
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Home;
















import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure to import the CSS file

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const querySnapshot = await getDocs(collection(db, 'movies'));
      setMovies(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchMovies();
  }, []);

  const classifyMoviesByCategory = () => {
    const categorizedMovies = {
      topMovies: [],
      topRated: [],
      superhero: [],
      anime: [],
    };

    movies.forEach(movie => {
      const showAs = movie.showas.toLowerCase();
      
      if (showAs === 'top movies') {
        categorizedMovies.topMovies.push(movie);
      } else if (showAs === 'top rated') {
        categorizedMovies.topRated.push(movie);
      } else if (showAs === 'superhero') {
        categorizedMovies.superhero.push(movie);
      } else if (showAs === 'anime') {
        categorizedMovies.anime.push(movie);
      }
    });

    return categorizedMovies;
  };

  const categorizedMovies = classifyMoviesByCategory();

  return (
    <div>
      <h1>Now Playing</h1>
      <hr />

      {/* Top Movies */}
      {categorizedMovies.topMovies.length > 0 && (
        <div className="movie-category">
          <h3>Top Movies</h3>
          <ul>
            {categorizedMovies.topMovies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  {movie.name} - {movie.showtime} 
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Top Rated */}
      {categorizedMovies.topRated.length > 0 && (
        <div className="movie-category">
          <h3>Top Rated</h3>
          <ul>
            {categorizedMovies.topRated.map(movie => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  {movie.name} - {movie.showtime} 
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Superhero */}
      {categorizedMovies.superhero.length > 0 && (
        <div className="movie-category">
          <h3>Superhero</h3>
          <ul>
            {categorizedMovies.superhero.map(movie => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  {movie.name} - {movie.showtime} 
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Anime */}
      {categorizedMovies.anime.length > 0 && (
        <div className="movie-category">
          <h3>Anime</h3>
          <ul>
            {categorizedMovies.anime.map(movie => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  {movie.name} - {movie.showtime} 
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Home;
