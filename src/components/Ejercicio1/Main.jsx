import Article from './Article';
import Aside from './Aside';

const Main = () => {
  return (
    <section className="main-section">
      <p className="etiqueta">&lt;section&gt;</p>

      <div className="contenido-section">
        <div className="articles-container">
          <Article />
          <Article />
        </div>
        <Aside />
      </div>

      <p className="etiqueta">&lt;/section&gt;</p>
    </section>
  );
};

export default Main;