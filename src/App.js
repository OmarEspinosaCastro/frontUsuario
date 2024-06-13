
import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
import Login from './components/Login';
import Bienbenida from './components/Bienbenida';
import Gestion from './components/Gestion';
import Tablero from './components/Tablero';
import GestionEdit from './components/GestionEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bienbenida" element={<Bienbenida/>} />
        <Route path="/gestion" element={<Gestion/>} />
        <Route path="/tablero" element={<Tablero />} />
        <Route path="/gestionedit" element={<GestionEdit />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
