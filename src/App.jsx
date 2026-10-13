import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import PaginaEjercicio1 from './pages/PaginaEjercicio1';
import PaginaEjercicio2 from './pages/PaginaEjercicio2';
import PaginaEjercicio3 from './pages/PaginaEjercicio3';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ejercicio1" element={<PaginaEjercicio1 />} />
          <Route path="/ejercicio2" element={<PaginaEjercicio2 />} />
          <Route path="/ejercicio3" element={<PaginaEjercicio3 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;