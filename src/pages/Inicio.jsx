const Inicio = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1> Bienvenido</h1>
      <p>Usa el menú de arriba para navegar entre los ejercicios.</p>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '18px' }}>
        <li>1. <strong>Ejercicio 1:</strong> Diseño Responsivo</li>
        <li>2. <strong>Ejercicio 2:</strong> Componentes Anidados con Props</li>
        <li>3. <strong>Ejercicio 3:</strong> Inscripción a Evento Académico</li>
      </ul>
    </div>
  );
};

export default Inicio;