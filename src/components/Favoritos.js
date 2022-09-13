import React from 'react'
import { useEffect, useState} from 'react'

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
            <div className="col-12">
                <h1>Favoritos</h1>
            </div>
        </div>
        <div className="row">
            {fav.map((movie) => (
                <div className="col-12 col-md-4">
                    <div className="card">
                        <img src={movie.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">{movie.description}</p>
                   
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
                


</>
  )
}

export default Favoritos
