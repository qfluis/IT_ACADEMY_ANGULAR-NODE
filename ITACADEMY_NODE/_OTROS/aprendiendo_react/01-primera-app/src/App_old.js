import './App.css';  // se pueden importar ficheros de estilos

function App() {
  // Estilo inline (utiliza las propiedades de css de javascript)
  // En lugar de kebab-kase utiliza lowerCamelCase (background-color => backgroundColor)
  const estiloLi = {
    backgroundColor: '#990000',
    color: 'white',
    padding: '5px',
    margin: '10px 5px'
  }
  const sombra = {
    boxShadow: '10px 5px 5px black'
  }

  const Li = ({children, estado}) => { // Componente, children es el contenido entre etiquetas.
    return (
      <li style={{...estiloLi, ...sombra}}>{children} - {estado}</li>
    )
  }
  const valor = 'Kiwi';

  return ( // Un componente puede devolver código JSX que será renderizado
    <ul className='clase-ul'>
      <Li estado={'Listo'}>Holiwi {valor}</Li>
      <Li estado={'Pendiente'}>Holiwiwi {valor}</Li>
    </ul>    
  );
}

export default App;
