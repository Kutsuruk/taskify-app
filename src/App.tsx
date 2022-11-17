import React, {FC, FormEvent, useState} from 'react';
import './App.css';
import InputField from "./components/InputField/InputField";
import {Todo} from "./model";
import TodoList from "./components/TodoList/TodoList";

const App:FC = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAdd = (event: FormEvent) => {
        event.preventDefault()

        if (todo)
            setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
            setTodo('')
    }

    return (
        <div className='App'>
            <span className="heading">Taskify</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            {/*<TodoList />*/}
        </div>
    );
}

export default App;
