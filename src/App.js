import { useSelector, useDispatch } from 'react-redux';
import { agregarTarea, borrar } from './actions/todo';
import './App.css';

const App = () => {
  const tareas = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const guardar = (ev) => {
    ev.preventDefault();
    console.log(ev.target.tarea.value);
    dispatch(agregarTarea(ev.target.tarea.value));
  };

  const remove = (id) => {
    dispatch(borrar(id));
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <form
          action=''
          onSubmit={(ev) => {
            guardar(ev);
          }}
        >
          <input type='text' name='tarea' />
          <button>Guardar</button>
        </form>
        <div>
          <ul>
            {tareas.map((item) => {
              return (
                <li key={item.id}>
                  {item.valor}{' '}
                  <button onClick={() => remove(item.id)}>borrar</button>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;
