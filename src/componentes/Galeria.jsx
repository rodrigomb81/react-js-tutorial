import remeSkater from '../assets/skater.jpg';
import remeHomero from '../assets/homero.jpg';
import remeStranger from '../assets/strangerthings.jpeg';

function Galeria() {
  return (
    <div>
      <img src={remeStranger} />
      <div>
        <img src={remeSkater} />
        <img src={remeHomero} />
        <img src={remeSkater} />
        <img src={remeHomero} />
        <img src={remeSkater} />
      </div>
    </div>
  );
}

export default Galeria;
