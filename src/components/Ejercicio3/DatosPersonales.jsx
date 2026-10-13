import DatosEvento from './DatosEvento';

const DatosPersonales = ({ datos, onChange }) => {
  return (
    <div className="ev3-comp2">
      <div className="ev3-fieldset">
        <h4 className="ev3-fieldset-title">
          <span className="ev3-step">1</span> Datos personales
        </h4>

        <div className="ev3-grid">
          <div className="campo">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={datos.nombre}
              onChange={onChange}
              required
              placeholder="Ej. Jaime Pérez"
            />
          </div>

          <div className="campo">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              type="email"
              name="correo"
              value={datos.correo}
              onChange={onChange}
              required
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="campo">
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              value={datos.telefono}
              onChange={onChange}
              required
              placeholder="999 888 777"
            />
          </div>

          <div className="campo">
            <label htmlFor="institucion">Institución</label>
            <input
              id="institucion"
              type="text"
              name="institucion"
              value={datos.institucion}
              onChange={onChange}
              required
              placeholder="Universidad Nacional del Centro"
            />
          </div>
        </div>
      </div>

      <DatosEvento datos={datos} onChange={onChange} />
    </div>
  );
};

export default DatosPersonales;