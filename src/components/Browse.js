import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"


const Browse = ()=>{
useNowPlayingMovies();
useTrendingMovies();
usePopularMovies();
useUpcomingMovies();
useTopRatedMovies();

 
  return (
  <div>
    <Header></Header>
    <MainContainer></MainContainer>
    <SecondaryContainer></SecondaryContainer>
  </div>);

}

export default Browse;

