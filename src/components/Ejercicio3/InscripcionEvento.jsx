import { useState } from 'react';
import DatosPersonales from './DatosPersonales';
import './InscripcionEvento.css';

const InscripcionEvento = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    institucion: '',
    evento: 'Congreso de Ingeniería 2026',
  });

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const destinatario = 'eventos@universidad.edu.pe';
    const asunto = `Inscripción al evento: ${datos.evento}`;
    const cuerpo =
      `Nueva inscripción al evento académico:\n\n` +
      `Nombre: ${datos.nombre}\n` +
      `Correo: ${datos.correo}\n` +
      `Teléfono: ${datos.telefono}\n` +
      `Institución: ${datos.institucion}\n` +
      `Evento: ${datos.evento}\n\n` +
      `Enviado desde el formulario web.`;

    const url = `mailto:${destinatario}?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;

    window.location.href = url;
  };

  return (
    <div className="ev3-wrapper">
      {/*  HEADER  */}
      <header className="ev3-header">
        <div className="ev3-header-content">
          <span className="ev3-badge"> Evento Académico 2026</span>
          <h1>Congreso de Ingeniería</h1>
          <p className="ev3-header-sub">
            Innovación, tecnología y futuro profesional
          </p>
          <div className="ev3-header-meta">
            <span>15 - 17 Noviembre 2026</span>
            <span> Auditorio UNCP, Huancayo</span>
          </div>
        </div>
      </header>

      {/*  NAV  */}
      <nav className="ev3-nav">
        <ul className="ev3-nav-links">
          <li><a href="#datos">Inscripción</a></li>
          <li><a href="#evento">Programa</a></li>
          <li><a href="#confirmar">Confirmar</a></li>
          <li><a href="#info">Información</a></li>
        </ul>
      </nav>

      {/*  SECTION  */}
      <section className="ev3-section">
        {/*  ARTICLE  */}
        <article className="ev3-article">
          <div className="ev3-article-header">
            <h2>Formulario de Inscripción</h2>
            <p>Completa tus datos para reservar tu lugar</p>
          </div>

          <form onSubmit={handleSubmit}>
            <DatosPersonales datos={datos} onChange={handleChange} />
          </form>
        </article>

        {/*  ASIDE */}
        <aside className="ev3-aside" id="info">
          <div className="ev3-aside-card">
            <h3>Información del evento</h3>
            <ul className="ev3-info-list">
              <li>
                <span className="ev3-info-label">Fecha</span>
                <span className="ev3-info-value">15 - 17 Nov 2026</span>
              </li>
              <li>
                <span className="ev3-info-label">Horario</span>
                <span className="ev3-info-value">9:00 AM - 6:00 PM</span>
              </li>
              <li>
                <span className="ev3-info-label">Lugar</span>
                <span className="ev3-info-value">Auditorio UNCP</span>
              </li>
              <li>
                <span className="ev3-info-label">Ciudad</span>
                <span className="ev3-info-value">Huancayo, Perú</span>
              </li>
              <li>
                <span className="ev3-info-label">Inversión</span>
                <span className="ev3-info-value">S/ 50.00</span>
              </li>
              <li>
                <span className="ev3-info-label">Cupos</span>
                <span className="ev3-info-value ev3-cupos">200 disponibles</span>
              </li>
            </ul>
          </div>

          <div className="ev3-aside-card ev3-aside-contact">
            <h3>Contacto</h3>
            <p>eventos@universidad.edu.pe</p>
            <p>+51 999 888 777</p>
          </div>
        </aside>
      </section>

      {/*  FOOTER  */}
      <footer className="ev3-footer">
        <p>2026 Universidad Nacional del Centro del Perú</p>
        <p className="ev3-footer-small">
          Organizado por la Facultad de Ingeniería de Sistemas
        </p>
      </footer>
    </div>
  );
};

export default InscripcionEvento;