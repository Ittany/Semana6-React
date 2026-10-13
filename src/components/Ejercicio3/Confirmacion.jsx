const Confirmacion = () => {
  return (
    <div className="ev3-comp4" id="confirmar">
      <div className="ev3-fieldset">
        <h4 className="ev3-fieldset-title">
          <span className="ev3-step">3</span> Confirmar inscripción
        </h4>

        <p className="ev3-confirm-text">
          Al confirmar, se abrirá tu cliente de correo con los datos
          precargados. Solo tendrás que pulsar <strong>Enviar</strong>.
        </p>

        <button type="submit" className="btn-enviar">
          Confirmar Inscripción
        </button>
      </div>
    </div>
  );
};

export default Confirmacion;