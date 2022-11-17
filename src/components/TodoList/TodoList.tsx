import React, {FC} from "react";
import './style.css';
import {Todo} from "../../model";
import SingleTodo from "../SingleTodo/SingleTodo";
import {Droppable} from "react-beautiful-dnd";

type TodoListProps = {
    index: any,
    todos: Todo[],
    setTodos:  React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:FC<TodoListProps> = ({index, todos, setTodos, completedTodos, setCompletedTodos}) => {
    return(
       <div className="container">
           <Droppable droppableId='TodosList'>
               {
                   (provided) => (
                       <div
                           className="todos"
                           ref={provided.innerRef}
                           {...provided.droppableProps}
                       >
                           <span className="todosHeading">
                               Active Tasks
                           </span>
                           <div className='todosListWrapper'>
                               {
                                   todos.map((todo, index) => (
                                       <SingleTodo
                                           index={index}
                                           key={todo.id}
                                           todo={todo}
                                           todos={todos}
                                           setTodos={setTodos}
                                       />
                                   ))
                               }
                           </div>
                           {provided.placeholder}
                       </div>
                   )
               }
           </Droppable>

           <Droppable droppableId='TodosRemove'>
               {
                   (provided) => (
                       <div
                           className="todos remove"
                           ref={provided.innerRef}
                           {...provided.droppableProps}
                       >
                           <span className="todosHeading">
                               Completed Tasks
                           </span>
                           <div className='todosListWrapper'>
                               {
                                   completedTodos.map((todo, index) => (
                                       <SingleTodo
                                           index={index}
                                           key={todo.id}
                                           todo={todo}
                                           todos={completedTodos}
                                           setTodos={setCompletedTodos}
                                       />
                                   ))
                               }
                           </div>
                       </div>
                   )
               }
           </Droppable>
       </div>
    )
}

export default TodoList