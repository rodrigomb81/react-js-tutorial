import './App.css';
import Saludo from './componentes/Saludo';
import Switch from './componentes/Switch';

function App() {
  const nombre = 'Rodri';

  return (
    <div>
      <Saludo nombreUsuario={nombre} />
      <Switch />
    </div>
  );
}

export default App;
