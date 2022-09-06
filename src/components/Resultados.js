import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Resultados = () => {
    const keyWord = useParams()
  const apiCall = `https://api.themoviedb.org/3/search/movie?api_key=5e63572e6af98e257733a794be08a3f8&language=en-US&query`
    const [resultados, setResultados] = useState([])

    useEffect(() => {
        
  return (
    <div>Resultados
{keyWord.id}
      
    </div>
  )
}

export default Resultados