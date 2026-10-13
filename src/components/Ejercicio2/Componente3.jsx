import Componente4 from './Componente4';

const Componente3 = ({ datos }) => {
  return (
    <div className="comp-3">
      <h4>Componente3</h4>
      <Componente4 datos={datos} />
    </div>
  );
};

export default Componente3;