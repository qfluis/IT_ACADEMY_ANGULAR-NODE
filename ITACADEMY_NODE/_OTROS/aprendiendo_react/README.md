# aprendiendo_react
## Crear una app react
```
npx create-react-app nombre-app
```
### Scripts disponibles
```
npm start           // Inicia el servidor de desarrollo
npm run build       // Genera build de producción
npm test            // Inicia los test
npm run eject       // Opción no recomendada
```
### Estructura carpetas
- public: archivos públicos para los usuarios, contiene el index html, que contendrá nuestra aplicación.
- src: contiene el código de la app.

## Estructura componente
Ejemplo de código de un componente:
```
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
```
### Más ejemplos componente
#### Componente Button:
```
import './Button.css';

const Button = (props) => {
    return (
        <button {...props} className='btn' />
    )
    
}

export default Button
```
Al desestructurar las props en la etiqueta button, esta recibe los eventos y las propiedades pasadas al componente que la contiene.
#### Componente App (importa Button)
```
import Button from './Button';  // importación componente

function App() {  
  return ( 
    <div>
      <h1>Holiwi</h1>
      <Button onClick={()=> console.log('click')}>  
        Enviar
      </Button>      
    </div>
  );
}

export default App;
```
## React Hooks
### useState
permite que el valor de la variable se actualice en la interfaz, cuando hay cambios.
```
import { useState } from 'react';
const App = () => {
    const [contador, setContador] = useState(0);
    return ( 
        <div>
            Contador: {contador}
            <hr />
            <button onClick={()=> setContador(contador+1)}>Incrementar</button>
        </div>
    )
}
export default App
```
### useEffect
Nos permite "disparar" un efecto, indicado en el primer parámetro, si hay cambios en las variables/objetos pasados como segundo parámetro.
```
const App = () => {
    const [contador, incrementar] = useContador(0);    
    useEffect(()=>{
        document.title = contador;
    },[contador]);
    return ( 
        <div>
            Contador: {contador}
            <hr />
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}
export default App;
```
### useReducer
Nos permite manejar los estados de un componente.
```
import { useReducer, useState } from 'react';

// Para este ejemplo state = { contador: 0 }
// action = { type: string, payload: any }
// action debe tener las propiedades type y payload por convención.
const inicial = { contador:0 }
const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementar':
            return { contador: state.contador + 1 };
        case 'decrementar':
            return { contador: state.contador - 1 };
        case 'set':
            return { contador: action.payload };
        default:
            return state;
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, inicial);
    const [valor, setValor] = useState(0);
    return (
        <div>
            Contador: {state.contador}
            <hr/>
            <input value={valor} onChange={ e=> setValor(e.target.value)} />
            <button onClick={()=> dispatch({type: 'incrementar'})}>Más</button>
            <button onClick={()=> dispatch({type: 'decrementar'})}>Menos</button>
            <button onClick={()=> dispatch({type: 'set', payload: Number(valor)})}>Resetear</button>
        </div>
    )
}
export default App;
```
### useRef
Nos permite acceder a elementos del dom con mayor eficiencia.
```
import { useRef } from "react";
const App = () => {
    const ref = useRef()
    const click = () => {
        ref.current.focus();       
    }
    return (
        <>
            <input ref={ref} />
            <button onClick={click}>Focus?</button>
        </>
    );
}
export default App;
```


### Crear un custom Hook
```
import { useState } from 'react';
const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);
    const incrementar = () => {
        setContador(contador+1);
    }
    return [contador, incrementar];
}
const App = () => {
    const [contador, incrementar] = useContador(0);
    return ( 
        <div>
            Contador: {contador}
            <hr />
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}
export default App;
```

