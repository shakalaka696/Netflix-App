import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addTrendingMovies} from "../utils/moviesSlice"
import { useEffect } from "react";


const useTrendingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
  const getNowPlayingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addTrendingMovies(json.results));

  }
};

export default useTrendingMovies;
