// props == properties == propiedades
function Saludo(props) {
  return (
    <div>
      <h1>Hola {props.nombreUsuario}!</h1>
    </div>
  );
}

export default Saludo;
