import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Detalle = () => {
  const navigate = useNavigate()
useEffect (() => {
  const token = sessionStorage.getItem("token")
  if (!token) {
    navigate("/")
  }
},[navigate] )



  return (
    <div>Detalle Peli</div>
  )
}

export default Detalle