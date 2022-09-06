import {useState,useEffect} from 'react'
import axios from "axios";

import {useParams} from 'react-router-dom'

const Resultados = () => {
    const keyWord = useParams()
    console.log(keyWord.id)
  const apiCall = `https://api.themoviedb.org/3/search/movie?api_key=5e63572e6af98e257733a794be08a3f8&language=en-US&query=${keyWord.id}`
    const [resultados, setResultados] = useState([])

    useEffect(() => {
axios.get(apiCall).then(response => {
    const results =  response.data
    console.log(results.results)
 
  
})
.catch(err => console.log(err) ) 

}, [])
 

  return (
    <div>Resultados
{keyWord.id}
      
    </div>
  )
}

export default Resultados