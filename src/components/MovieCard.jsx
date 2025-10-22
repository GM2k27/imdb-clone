import React from "react";

const MovieCard = ({
  poster_path,
  name,
  movieObj,
  addToWatchList,
  remFromWatchList,
  watchList,
}) => {
  const isAdded = watchList.some(movie => movie.id === movieObj.id);

  return (
    <div
      className="hover:cursor-pointer hover:scale-105 duration-300 flex flex-col justify-between h-[50vh] w-[30vh] bg-no-repeat rounded-xl bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
      }}
    >
      <div className="flex justify-end items-start p-3">
        <div>
          {isAdded ? (
            <div onClick={() => remFromWatchList(movieObj)}
              className="bg-black/40 backdrop-blur-sm rounded-full h-10 w-10 flex items-center justify-center text-xl shadow-lg">❌</div>
          ) : (
            <div
              onClick={() => addToWatchList(movieObj)}
              className="bg-black/40 backdrop-blur-sm rounded-full h-10 w-10 flex items-center justify-center text-xl shadow-lg"
            >
              ❤️
            </div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-t from-black/90 pt-8">
        <div className="text-white text-lg font-semibold text-center p-3 w-full">
          {name}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
