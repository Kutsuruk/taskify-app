import React, {FC, FormEvent} from "react";
import '../InputField/style.css';

type InputFieldProps = {
    todo: string,
    setTodo:  React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: FormEvent) => void,
}

const InputField:FC<InputFieldProps> = ({todo, setTodo, handleAdd}) => {
    return(
        <form className='input' onSubmit={handleAdd}>
            <input
                type='input'
                placeholder='Enter a task...'
                className='inputBox'
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
            />
            <button
                type='submit'
                className='inputSubmit'
            >Go!</button>
        </form>
    )
}

export default InputField