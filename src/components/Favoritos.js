import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { IoIosTrash } from "react-icons/io";
import './listado.css'


const Favoritos = () => {
    const [fav, setFav] = useState([])
    useEffect(() => {
        const favStorage = localStorage.getItem('fav')
        if (favStorage) {
            setFav(JSON.parse(favStorage))
        }
    }, [])
  return (
<>
    <div className="container">
      
        <div className="row">
            {fav.length ===  0 ? ( <div className="col-12">
                <p>No hay favoritos</p>
            </div>) : (
                fav.map((movie) => (
                    <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
                        {console.log(movie.idMovie)}
                        <div className="card">
                            <img src={movie.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.description}</p>
                                <Link to={`/detalle/${movie.idMovie}`} className="btn btn-primary">Detalle</Link>
                                <IoIosTrash className='trasher' />

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
