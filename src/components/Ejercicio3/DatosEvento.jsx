import Confirmacion from './Confirmacion';

const DatosEvento = ({ datos, onChange }) => {
  return (
    <div className="ev3-comp3" id="evento">
      <div className="ev3-fieldset">
        <h4 className="ev3-fieldset-title">
          <span className="ev3-step">2</span> Selecciona el evento
        </h4>

        <div className="ev3-eventos">
          {[
            'Congreso de Ingeniería 2026',
            'Taller de React Avanzado',
            'Seminario de Inteligencia Artificial',
            'Feria de Ciencias Huancayo',
          ].map((op) => (
            <label
              key={op}
              className={`ev3-evento-opcion ${
                datos.evento === op ? 'ev3-selected' : ''
              }`}
            >
              <input
                type="radio"
                name="evento"
                value={op}
                checked={datos.evento === op}
                onChange={onChange}
              />
              <span>{op}</span>
            </label>
          ))}
        </div>
      </div>

      <Confirmacion />
    </div>
  );
};

export default DatosEvento;