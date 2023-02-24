/**
 * Un componente que cuando se le hace click
 * cambia entre "ON" y "OFF"
 */

import { useState } from 'react';

function Switch() {
  let [encendido, setEncendido] = useState(true);

  function cambiarEstado() {
    let nuevoValor;

    if (encendido == true) {
      nuevoValor = false;
    } else {
      nuevoValor = true;
    }

    setEncendido(nuevoValor);
  }

  if (encendido == true) {
    return (
      <div>
        <span>ON</span>
        <button onClick={cambiarEstado}>CAMBIAR</button>
      </div>
    );
  } else {
    return (
      <div>
        <span>OFF</span>
        <button onClick={cambiarEstado}>CAMBIAR</button>
      </div>
    );
  }
}

export default Switch;
