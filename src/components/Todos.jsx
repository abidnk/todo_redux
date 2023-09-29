import React from 'react'
import Icon from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux';
import { handleCheckbox, removeTodo } from '../redux/action';



export const Todos = ({handleEditClick, editFormVisibility}) => {
   
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.operationsReducer);
    return todos.map((todo)=>(
      <div key={todo.id} className='todo-box'>
          <div className='content'>
              {editFormVisibility===false&&(
                <input type="checkbox" checked={todo.completed}
                onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
              )}
              <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                  {todo.todo}
              </p>
          </div>
          <div className='actions-box'>
                {editFormVisibility===false&&(
                  <>
                    <span onClick={()=>handleEditClick(todo)}><Icon icon={edit2}/></span>
                    <span onClick={()=>dispatch(removeTodo(todo.id))}><Icon icon={trash}/></span>
                  </>
                )}
          </div>
      </div>
    ))
  }