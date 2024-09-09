import 'bootstrap/dist/css/bootstrap.min.css';
import Hola from './components/Hola';

function App() {
  

  return (
    <section className='container'>
      <h1 className='text-center pt-5 display-1'>Hello World!</h1>
      <Hola saludar ='my friend!'></Hola>
    </section>
  )
}

export default App
