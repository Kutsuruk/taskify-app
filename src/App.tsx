import React, {FC, useState} from 'react';
import './App.css';
import InputField from "./components/InputField/InputField";

const App:FC = () => {
    const [todo, setTodo] = useState('')

    return (
        <div className='App'>
            <span className="heading">Taskify</span>
            <InputField todo={todo} setTodo={setTodo} />
        </div>
    );
}

export default App;
