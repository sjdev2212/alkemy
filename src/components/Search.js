import React from 'react'
import swal from '@sweetalert/with-react';
import { useNavigate} from 'react-router-dom'
const Buscador = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
       e.preventDefault();
       const word =e.currentTarget.keyword.value.trim()
       if (word === ""){
        swal(
          <h2>Please enter something to search</h2> 
           ) 
       }
       else if (word.length < 4) {
        swal(
          <h2>Please enter at least 4 characters</h2> 
           ) 
       }
       else {
        e.currentTarget.keyword.value = "";
        navigate(`/resultados/${word}`)
       
       }
         
}
   return (
    <form className="d-flex align-items-center" onSubmit={handleSubmit}>
 <label className="form-label mb-0 mx-2">
    <input type="text" className="form-control" name="keyword" placeholder="Enter Movie"/>
    </label>
<button type="submit" className="btn btn-success">Search</button>
</form>
  )
}

export default Buscador