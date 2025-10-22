import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation.jsx'
import Movies from './components/Movies.jsx'
import WatchList from './components/WatchList.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Banner from './components/Banner.jsx'
function App() {
  let [prevWatchList,setWatchList]=useState([])

  let addToWatchList =(movieObj) =>{
    let newWatchList=[...prevWatchList,movieObj]
    localStorage.setItem('movie',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let remFromWatchList=(movieObj)=>{
    console.log("Removing movie:", movieObj);
    console.log("Current watch list:", prevWatchList);
    
    let filterWatchList=prevWatchList.filter((movie)=>{
      return(movie.id !== movieObj.id)
    })
    
    console.log("Filtered watch list:", filterWatchList);
    localStorage.setItem('movie',JSON.stringify(filterWatchList))
    setWatchList(filterWatchList)
  }

  useEffect(()=>{
    let movieArr=localStorage.getItem('movie')
    if(!movieArr)
      return
    setWatchList(JSON.parse(movieArr))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<><Banner /> <Movies addToWatchList={addToWatchList} remFromWatchList={remFromWatchList} watchList={prevWatchList}/> </>}></Route>
          <Route path='/WatchList' element={<WatchList prevWatchList={prevWatchList} setWatchList={setWatchList} remFromWatchList={remFromWatchList}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



