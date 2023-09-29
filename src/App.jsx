import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/action';
import { Form } from './components/Forms';
import { Todos } from './components/Todos';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility]=useState(false);
  const [editTodo, setEditTodo]=useState('');
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;
