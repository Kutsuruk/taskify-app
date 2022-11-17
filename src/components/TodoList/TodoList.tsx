import React, {FC} from "react";
import './style.css';
import {Todo} from "../../model";
import SingleTodo from "../SingleTodo/SingleTodo";

type TodoListProps = {
    todos: Todo[],
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:FC<TodoListProps> = ({todos, setTodos}) => {
    return(
       <div className="container">
           <div className="todos">
               <span className="todosHeading">
                   Active Tasks
               </span>
               <div className='todosListWrapper'>
                   {
                       todos.map(todo => (
                           <SingleTodo
                               key={todo.id}
                               todo={todo}
                               todos={todos}
                               setTodos={setTodos}
                           />
                       ))
                   }
               </div>
           </div>
           <div className="todos remove">
               <span className="todosHeading">
                   Completed Tasks
               </span>
               <div className='todosListWrapper'>
                   {
                       todos.map(todo => (
                           <SingleTodo
                               key={todo.id}
                               todo={todo}
                               todos={todos}
                               setTodos={setTodos}
                           />
                       ))
                   }
               </div>
           </div>
       </div>
    )
}

export default TodoList