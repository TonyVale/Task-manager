import './App.css';
import ListDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicaciones-tareas">
      <div className='tareas-lista-principal'>
        <h1>
          Mis Tareas
        </h1>
        <ListDeTareas/>
      </div>
    </div>

  );
};

export default App;
