import {Todo} from "../../model";
import {useReducer} from "react";

type Actions = {type: 'add', payload: string} | {type: 'delete', payload: number} | {type: 'done', payload: number}

const TodoReducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {id: Date.now(), todoName: action.payload, isDone: false}
            ]
        case "delete":
            return state.filter((todo) => todo.id !== action.payload)
        // case "done":
        //     return state.map((todo) => {
        //         todo.id !== action.payload ? {...todo, isDone: !todo.isDone}
        //     })

        default:
            return state
    }
}

const ReducerExample = () => {
    // const [state, dispatch] = useReducer(TodoReducer, [])

    return <div />
}