const Componente4 = ({ datos }) => {
  return (
    <div className="comp-4">
      <h4>Componente4</h4>
      <p>Imprimir un card con los datos del objeto</p>

      <div className="card">
        <p><strong>Nombre:</strong> {datos.nombre}</p>
        <p><strong>Dirección:</strong> {datos.direccion}</p>
        <p><strong>Ciudad:</strong> {datos.ciudad}</p>
      </div>
    </div>
  );
};

export default Componente4;