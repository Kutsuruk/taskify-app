import React, {FC} from "react";
import './style.css'
import {Todo} from "../../model";
import {AiFillDelete, AiFillEdit, AiOutlineCheck} from "react-icons/ai";

type SingleTodoProps = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:FC<SingleTodoProps> = ({todo, todos, setTodos}) => {
    return(
        <form className='todosSingle'>
            <span className='todosSingleText'>{todo.todoName}</span>
            <div>
                <span className='icon'>
                    <AiFillEdit />
                </span>
                <span className='icon'>
                    <AiFillDelete />
                </span>
                <span className='icon'>
                    <AiOutlineCheck />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo