import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
  const getNowPlayingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));

  }
};

export default useNowPlayingMovies;
