import { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";

const Detalle = () => {
   const [detalle, setDetalle] = useState([]);
  const navigate = useNavigate()
  const params = useParams()
  const apiEndpoint = `https://api.themoviedb.org/3/movie/${params.id}?api_key=5e63572e6af98e257733a794be08a3f8&language=en-US`
 

useEffect (() => {
  const token = sessionStorage.getItem("token")
  if (!token) {
    navigate("/")
  }
  axios.get(apiEndpoint).then(res => {
  
    setDetalle(res.data)
  } )

},[navigate,setDetalle,apiEndpoint] )



  return (
    <>
    <div className='row'>
    <h2>{detalle.title}</h2>
        <div className='col-4'>
        <img src={`https://image.tmdb.org/t/p/w500/${detalle.poster_path}`} className="card-img-top" alt="..." />
        </div>
        <div className='col-8'>
        <p>{detalle.overview}</p>
        </div>
      
    </div>
    </>
  )
}

export default Detalle