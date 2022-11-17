import React, {FC, FormEvent, useRef} from "react";
import './style.css';

type InputFieldProps = {
    todo: string,
    setTodo:  React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: FormEvent) => void,
}

const InputField:FC<InputFieldProps> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return(
        <form className='input' onSubmit={(event) => {
            handleAdd(event)
            inputRef.current?.blur()
        }}>
            <input
                ref={inputRef}
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