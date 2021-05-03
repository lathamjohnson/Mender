import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import { Route, useHistory } from 'react-router-dom'
import Favorites from './Components/Favorites'
import Footer from './Components/Footer'
import Results from './Components/Results';
import Home from './Components/Home'

function App() {
  const apiKey = 'a4bc5bfb2e265aa808fa923589576980'
  const [artistPool, setArtistPool] = useState([])
  const [search, setSearch] = useState('')
  const [album, setAlbum] = useState({name: "", artist: {name: ""}, image:[{}, {}, {}, {"#text": ""}]})
  const [favorites, setFavorites] = useState([])
  const history = useHistory()

  useEffect(() =>{
    localStorage.setItem("favorites", JSON.stringify(favorites))
  },[favorites])

  function handleChange(e){setSearch(e.target.value)}
  
  async function handleSearch (e){
    const q = []
    e.preventDefault()
    search.split(',').forEach((str) => {q.push(str.trim().replace(/ /g, '+'))})
    setArtistPool(getArtists(q))
    if(artistPool === []){return}
    const album = await getAlbum(artistPool[(Math.floor(Math.random() * artistPool.length))])
    setAlbum(album)
    history.push("/results")
  }

  function getArtists(arr){
    const similar = []
    arr.forEach( async artist => {
      const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist}&api_key=${apiKey}&format=json`
      const artists = await fetch(url)
      if(!artists.ok){return}
      const data = await artists.json()
      const arr = data.similarartists.artist
      for(const artist of arr){
        if(!similar.includes(artist.name)){similar.push(String(artist.name))}
      }
  })
  return similar
}

  async function getAlbum(str){
    const artist = str.toLowerCase().replace(/ /g, '+')
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${apiKey}&format=json`
    const albums = await fetch(url)
    .then((res) => res.json())
    .then((res) => res.topalbums.album)
    return(albums[Math.floor(Math.random() * albums.length)])
  }

  async function addFavorite(e){
    if(e.target.id == "fav"){
      const favorite = JSON.parse(localStorage.getItem("favorites") || "[]")
      favorite.push(album)
      setFavorites(favorite)
      localStorage.setItem("favorites", favorites)
    }
    const a = await getAlbum(artistPool[(Math.floor(Math.random() * artistPool.length))])
    setAlbum(a)
  } 

  return (
    <>
      <Route path="" component={Header}/>
      <Route exact path="/" render={routerProps => <Home handleSearch={handleSearch} handleChange={handleChange}/>}/>
      <Route exact path="/results" render={routerProps => <Results addFavorite={addFavorite} current={album}/>}/>
      <Route exact path="/favorites" component={Favorites}/>
      <Route path="" component={Footer}/>
    </>
  );
}

export default App;
