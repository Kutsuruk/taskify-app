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
    )
}

export default TodoList