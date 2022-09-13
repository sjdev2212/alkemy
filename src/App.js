import Login from './components/Login'
import Listado from './components/Listado'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Detalle from './components/Detalle'
import Resultados from './components/Resultados'
import {useState, useEffect} from "react"
import Favoritos from './components/Favoritos';


function App() {
  const [fav, setFav] = useState([]);
  const addToFav = (e) => {
    const btn = e.currentTarget
    const div = btn.parentElement
    const image = div.querySelector('img').getAttribute('src')
    const title = div.querySelector('h5').innerText
    const description = div.querySelector('p').innerText
    const idMovie = btn.getAttribute('movieId')
    const movieInfo = {
      image,title,description,idMovie}
      if (fav.find(movie => movie.idMovie === idMovie)) {
        return
      }
      setFav([...fav, movieInfo])
      localStorage.setItem('fav', JSON.stringify(fav))
      

    }

useEffect (() => {
  const favStorage = localStorage.getItem('fav')
  if (favStorage) {
    setFav(JSON.parse(favStorage))
  }

}, [])
  

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="listado" element={<Listado addToFav={addToFav} />} />
      <Route path="detalle/:id" element={<Detalle />} />
      <Route path="resultados/:id" element={<Resultados />} />
      <Route path="favoritos" element={<Favoritos />} />
     </Routes>
    <Footer/>
      </BrowserRouter>

  );
}

export default App;
