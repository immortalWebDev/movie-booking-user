import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./Home.css";
import useDebounce from '../../hooks/useDebounce'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categorizedMovies, setCategorizedMovies] = useState({});
  const [loading, setLoading] = useState(true);
  const [search,setSearch] = useState("")

  const debouncedSearch = useDebounce(search,600)

  useEffect(() => {
    const fetchCategoriesAndMovies = async () => {
      setLoading(true);

      // Fetch categories
      const categoriesSnapshot = await getDocs(collection(db, "categories"));
      // console.log(categoriesSnapshot)
      const categoriesList = categoriesSnapshot.docs.map(doc => doc.data().name.toLowerCase());
      // console.log(categoriesList)
      setCategories(categoriesList);

      // Fetch movies
      const moviesSnapshot = await getDocs(collection(db, "movies"));
      // console.log(moviesSnapshot)
      const moviesList = moviesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // console.log(moviesList)


      setMovies(moviesList);

      // Categorize movies
      // console.log(categoriesList)
      const categorized = {};
      categoriesList.forEach(category => {
        categorized[category] = [];
      });

      // console.log(moviesList)

      moviesList.forEach(movie => {
        const category = movie.showas.toLowerCase();
        if (categorized[category]) {
          categorized[category].push(movie);
        }
      });

    
      setCategorizedMovies(categorized);

      // console.log(categorized)

      setLoading(false);
    };

    fetchCategoriesAndMovies();
  }, []);

  const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(debouncedSearch.toLowerCase()))

  // //check debounce
  // useEffect(() => {
  //   console.log(filteredMovies);
  // }, [debouncedSearch]);

  const categorizedFilteredMovies = {}
  categories.forEach(category => {
    categorizedFilteredMovies[category] = []
  })

  filteredMovies.forEach(movie => {
    const category = movie.showas.toLowerCase()
    if(categorizedFilteredMovies[category]){
      categorizedFilteredMovies[category].push(movie)
    }
  })


  let noMoviesFound = true;
  for(const cat of categories){
    if(categorizedFilteredMovies[cat].length > 0)
      noMoviesFound = false
  }
  
  return (
    <div className="now-playing">
      <div className="header-now-playing">
      <h1>Now Playing</h1>
      <input
      className="search-box"
      type="search"
      placeholder="Search movies..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}></input>
      </div>
      
      <hr className="top-hr" />

      {loading ? (
        <p className="fetching-movies">Fetching currently playing movies...</p>
      ) : noMoviesFound ? (<p className="not-found-movies">No movies found. Come again later!</p>) : (
        <>
          {categories.map(category => (
            categorizedFilteredMovies[category] && categorizedFilteredMovies[category].length > 0 && (
              <div className="movie-category" key={category}>
                <h3 className="category-heading">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <ul>
                  {categorizedFilteredMovies[category].map(movie => (
                    <li key={movie.id}>
                      <Link to={`/movie/${movie.id}`}>
                        {movie.name} - {movie.showtime}
                      </Link>
                    </li>
                  ))}
                </ul>
                <hr/>
              </div>
            )
          ))}
        </>
      )}
    </div>
  );
};

export default Home;