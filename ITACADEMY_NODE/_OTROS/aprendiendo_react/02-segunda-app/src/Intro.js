const MiComponente = ({miProp}) => {
  return (
    <div>
      Nombre:{miProp}
    </div>
  )
}

const App = () => {

  return (
    <MiComponente miProp={'Holiwi'} />
  )



}

export default App;
