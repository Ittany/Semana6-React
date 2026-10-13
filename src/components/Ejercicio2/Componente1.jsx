import Componente2 from './Componente2';
import './Ejercicio2.css';

const Componente1 = () => {
  const datosUsuario = {
    nombre: 'Jaime',
    direccion: 'Jr. Junin 450',
    ciudad: 'Huancayo',
  };

  return (
    <div className="contenedor-ejercicio2">
      <div className="comp-1">
        <h4>Componente1</h4>
        <Componente2 datos={datosUsuario} />
      </div>
    </div>
  );
};

export default Componente1;