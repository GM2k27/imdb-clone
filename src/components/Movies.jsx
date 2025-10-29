import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination.jsx";

function Movies({addToWatchList, remFromWatchList,watchList}) {
  const [movies, setmovies] = useState([]);
  const[pageNo,setPageNo]=useState(1)

    const arrowLeft = ()=>{
    if(pageNo!=1)
      setPageNo(pageNo-1)
  }

  const arrowRight = ()=>{
    setPageNo(pageNo+1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=b71a973ad7affea67164172456adb260&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setmovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="p-2 text-center text-black-3xl font-bold">
        Top Rated Movies
      </div>
      <div className="flex flex-row gap-10 justify-center flex-wrap">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              key={movieObj.id}
              movieObj={movieObj}
              addToWatchList={addToWatchList}
              remFromWatchList={remFromWatchList}
              watchList={watchList}
            />
          );
        })}
      </div>
        <Pagination arrowLeft={arrowLeft} arrowRight={arrowRight} pageNo={pageNo}/>
    </div>
  );
}

export default Movies;
