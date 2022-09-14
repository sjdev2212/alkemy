import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { IoIosTrash } from "react-icons/io";
import './list.css'


const Favoritos = () => {
 const [fav, setFav] = useState([])
    useEffect(() => {
        const favStorage = localStorage.getItem('fav')
        const fav = JSON.parse(favStorage)
        if (fav) {
            setFav(fav)
        }
       
    }, [])
    
    const removeFav = (e) => {
        
        const favStorage = localStorage.getItem('fav')
        const fav = JSON.parse(favStorage)
        console.log(fav)
        const btn = e.currentTarget
        const idMovie = btn.getAttribute('movieId')
        console.log(idMovie)
        const newFav = fav.filter(movie => movie.idMovie !== idMovie)
        localStorage.setItem('fav', JSON.stringify(newFav)) 
        setFav(newFav)


    }
  return (
<>
<div className="container mt-3">
      
        <div className="row">
            {fav.length ===  0 ? ( <div className="col-12 mt-5">
                <p>No favorites added</p>
            </div>) : (
                fav.map((movie) => (
                    <div className="col-10 col-md-6 col-lg-4" key={movie.id}>
                        <div className="card">
                            <img src={movie.image} className="card-img-top" alt="poster" />
                            <div className="card-body">
                                <h5 className="card-title title">{movie.title}</h5>
                                <p className="card-text">{movie.description}</p>
                                <Link to={`/detalle/${movie.idMovie}`} className="btn btn-primary">Detalle</Link>
                                <IoIosTrash className='trasher' movieId={movie.idMovie} onClick={removeFav} />

                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    </div>

                


</>
  )
}

export default Favoritos
