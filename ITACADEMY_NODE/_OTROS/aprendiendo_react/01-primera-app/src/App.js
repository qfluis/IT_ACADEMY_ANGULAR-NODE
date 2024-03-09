import Button from './Button';  // importación componente

function App() {  
  const arr = [
    'Luis',
    'Cris',
    'Sara'
  ];
  let miVariable = false;

  if (miVariable) {
    return (
      <p> Mi variable es true</p>
    )
  }

  return ( 
    <div>
      <h1>Holiwi</h1>
      {arr.map(el => <p key={el}>{el}</p>)}
      <Button onClick={()=> miVariable = false}>  
        Enviar
      </Button>      
    </div>
  );
}

export default App;
