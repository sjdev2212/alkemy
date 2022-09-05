import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom' 
import swal from '@sweetalert/with-react';



const Login = () => {
  const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
     const email =  e.target.email.value
        const password = e.target.password.value
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        
        if (email === '' || password === '') {
          swal(
            <h2>Please fill all the fields</h2> 
             ) 
        } else if (!emailRegex.test(email)) {
          swal(
            <h2>Please enter a valid email</h2> 
             ) 
                
        }
        else if (email !== "challenge@alkemy.org" || password !== "react") {
          swal(
            <h2>Email or password incorrect</h2> 
             ) 
        }
        else {
     axios
        .post('http://challenge-react.alkemy.org/', {email, password})
        .then(res => {
          swal(
            <h2>You are in</h2> 
             ) 
            const tokenRecibido = res.data.token
            sessionStorage.setItem('token', tokenRecibido)
            navigate('/listado')
        } )

    }
    }
  return (
    <div>
  <form onSubmit={submitHandler} >
   <input type="email" placeholder="email" name="email"/>
    <input type="password" placeholder="password"  name="password"/>
    <button  type="submit" >Ingresar</button>
    </form>
    </div>


  )
}

export default Login