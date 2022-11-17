import React, {FC, useEffect, useRef, useState} from "react";
import './style.css'
import {Todo} from "../../model";
import {AiFillDelete, AiFillEdit, AiOutlineCheck} from "react-icons/ai";
import {Draggable} from "react-beautiful-dnd";

type SingleTodoProps = {
    index: number,
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:FC<SingleTodoProps> = ({index, todo, todos, setTodos}) => {
    const [edit, setEdit] = useState(false)
    const [editTodo, setEditTodo] = useState(todo.todoName)

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        )
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        )
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])


    return(
        <Draggable draggableId={todo.id.toString()} index={index} >

            {
                (provided) => (
                    <form
                        className='todosSingle'
                        onSubmit={(e) => handleEdit(e, todo.id)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >

                        {edit ? (
                            <input
                                value={editTodo}
                                onChange={(e) => setEditTodo(e.target.value)}
                                className="todosSingleText"
                                ref={inputRef}
                            />
                        ) : todo.isDone ? (
                            <s className="todosSingleText">{todo.todoName}</s>
                        ) : (
                            <span className="todosSingleText">{todo.todoName}</span>
                        )}

                        <div>
                <span className='icon' onClick={() => {
                    if (!edit && !todo.isDone)
                        setEdit(!edit)
                }}>
                    <AiFillEdit />
                </span>
                            <span className='icon' onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                            <span className='icon' onClick={() => handleDone(todo.id)}>
                    <AiOutlineCheck />
                </span>
                        </div>
                    </form>
                )
            }

        </Draggable>

    )
}

export default SingleTodo