import React, { useEffect, useState } from "react";
import category from "../Utility/Category";
import { use } from "react";
function WatchList({ prevWatchList, setWatchList, remFromWatchList}) {
  const [textSearch, setSearch] = useState("");
  const [catList, setCatList] = useState(["All categories"]);
  const [curCat, setCurCat] = useState("All categories");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    console.log("Sorting increasing...", prevWatchList);
    let sortedInc = [...prevWatchList].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    console.log("Sorted increasing result:", sortedInc);
    setWatchList(sortedInc);
  };

  let sortDecreasing = () => {
    console.log("Sorting decreasing...", prevWatchList);
    let sortedDec = [...prevWatchList].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    console.log("Sorted decreasing result:", sortedDec);
    setWatchList(sortedDec);
  };

  useEffect(() => {
    let tmp = prevWatchList.map((movieObj) => {
      return category[movieObj.genre_ids[0]];
    });
    tmp=new Set(tmp)
    setCatList(["All categories", ...tmp]);
  }, [prevWatchList]);

  const handleCat = (categ) => {
    setCurCat(categ);
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Movies"
          value={textSearch}
          className="justify-center text-center px-3 h-[30px] w-[200px] border border-orange-500 outline-none"
        />
      </div>

      <div className="flex items-center m-5 justify-center flex-wrap">
        {catList.map((categ) => {
          return (
            <div
              onClick={() => handleCat(categ)}
              className={
                categ == curCat
                  ? "hover:cursor-pointer bg-orange-200 w-[full] px-2  h-[3rem] rounded-lg flex justify-center items-center text-xl m-3 "
                  : "hover:cursor-pointer w-[full] px-2 h-[3rem] bg-grey-200/10 rounded-lg flex justify-center items-center text-xl m-3"
              }
            >
              {categ}
            </div>
          );
        })}
      </div>

      <div className="border border-gray-500 mx-6 rounded-lg  overflow-hidden">
        <table className="w-full text-center ">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex space-x-3 justify-center">
                <div onClick={sortDecreasing} className="hover:cursor-pointer">
                  ⬇
                </div>
                <div>Rating</div>
                <div onClick={sortIncreasing} className="hover:cursor-pointer">
                  ⬆
                </div>
              </th>
              <th>Popularity</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {prevWatchList.filter((movieObj)=>{
              if(curCat=='All categories')
                return true
              else
                return category[movieObj.genre_ids[0]]==curCat
            })
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(textSearch.toLowerCase());
              })
              .map((movie) => (
                <tr className="border-b-2" key={movie.id}>
                  <td className="flex items-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      className="w-[8rem] h-[10rem] p-3 m-2"
                      alt={movie.original_title}
                    />
                    <span className="m-10">{movie.original_title}</span>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>{category[movie.genre_ids[0]]}</td>
                  <td onClick={()=>remFromWatchList(movie)} className="text-red-700 cursor-pointer">Delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
