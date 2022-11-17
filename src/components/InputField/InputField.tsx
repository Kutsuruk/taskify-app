import React, {FC} from "react";
import '../InputField/style.css';

type InputFieldProps = {
    todo: string,
    setTodo:  React.Dispatch<React.SetStateAction<string>>,
}

const InputField:FC<InputFieldProps> = ({todo, setTodo}) => {
    console.log(todo)
    return(
        <form className='input'>
            <input
                type='input'
                placeholder='Enter a task...'
                className='inputBox'
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
            />
            <button type='submit' className='inputSubmit'>Go!</button>
        </form>
    )
}

export default InputField