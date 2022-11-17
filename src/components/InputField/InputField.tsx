import {FC} from "react";
import '../InputField/style.css';

const InputField:FC = () => {
    return(
        <form className='input'>
            <input type='input' placeholder='Enter a task...' className='inputBox'/>
            <button type='submit' className='inputSubmit'>Go!</button>
        </form>
    )
}

export default InputField