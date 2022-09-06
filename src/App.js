import Login from './components/Login'
import Listado from './components/Listado'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Detalle from './components/Detalle'
import Resultados from './components/Resultados'


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="listado" element={<Listado />} />
      <Route path="detalle/:id" element={<Detalle />} />
      <Route path="resultados/:id" element={<Resultados />} />
     </Routes>
    <Footer/>
      </BrowserRouter>

  );
}

export default App;
