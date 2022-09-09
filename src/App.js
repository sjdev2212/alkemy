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


function App() {
   localStorage.getItem('favoritos')
  const addToFav = (e) => {
    e.preventDefault()
   const btn = e.currentTarget
 const div = btn.parentElement
  const image = div.querySelector('img').getAttribute('src')
  const title = div.querySelector('h5').innerText
  const description = div.querySelector('p').innerText
 const idMovie = btn.getAttribute('movieId')
 

 const movieInfo = {
    image,title,description,idMovie}
    let temporalFavs = []
// if (temporalFavs.length === 0) {
//   btn.setAttribute('class', 'btn-fav-not')
// }
temporalFavs.push(movieInfo)
localStorage.setItem('favoritos', JSON.stringify(temporalFavs))
    }
  

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="listado" element={<Listado addToFav={addToFav} />} />
      <Route path="detalle/:id" element={<Detalle />} />
      <Route path="resultados/:id" element={<Resultados />} />
     </Routes>
    <Footer/>
      </BrowserRouter>

  );
}

export default App;
