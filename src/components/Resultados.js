import {useState,useEffect} from 'react'
import{Link,useParams} from 'react-router-dom'
import swal from '@sweetalert/with-react';
import axios from "axios";

const Resultados = () => {
    const keyWord = useParams()
    const apiCall = `https://api.themoviedb.org/3/search/movie?api_key=5e63572e6af98e257733a794be08a3f8&language=en-US&query=${keyWord.id}`
    const [resultados, setResultados] = useState([])

 useEffect(() => {
  axios.get(apiCall).then(response => {
   const results =  response.data.results
    if ( results.length === 0) {
      swal("No results found")
    }
    setResultados(results)
 })
    .catch(err => console.log(err) ) 
}, [keyWord.id,apiCall])
 

  return (
    <>
    <h3>Buscaste:  {keyWord.id}</h3>
      <div className="container text-center">
      <div className="row align-items-start">
        {resultados.map(pelicula => (
          <div className="col-12 col-md-6 col-lg-4" key={pelicula.id}>
        <div className="card" style={{width: "18rem"}}>
        <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} className="card-img-top" alt="..." />

        <div className="card-body">
         <h5 className="card-title">{pelicula.title}</h5>
         <p className="card-text">{pelicula.overview.substr(0,50)}...</p>
        <Link to={`/detalle/${pelicula.id}`} className="btn btn-primary">See More</Link> 
  </div>


  </div>
  </div>




))} 
</div>
  </div>
    </>
  )
}

export default Resultados