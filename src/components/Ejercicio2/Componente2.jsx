import Componente3 from './Componente3';

const Componente2 = ({ datos }) => {
  return (
    <div className="comp-2">
      <h4>Componente2</h4>
      <Componente3 datos={datos} />
    </div>
  );
};

export default Componente2;