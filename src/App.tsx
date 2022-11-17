import React, {FC, FormEvent, useState} from 'react';
import './App.css';
import InputField from "./components/InputField/InputField";
import {Todo} from "./model";
import TodoList from "./components/TodoList/TodoList";
import {DragDropContext, DropResult} from 'react-beautiful-dnd'

// type AppProps = {
//     index: number
// }

const App:FC = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

    const handleAdd = (event: FormEvent) => {
        event.preventDefault()

        if (todo)
            setTodos([...todos, {id: Date.now(), todoName: todo, isDone: false}])
            setTodo('')
    }

    const onDragEnd = (result: DropResult) => {
        const {source, destination} = result

        if  (!destination)
            return;
        if (destination.droppableId === source.droppableId && destination.index === source.index)
            return;

        let add,
            active = todos,
            complete = completedTodos

        if (source.droppableId === 'TodosList') {
            add = active[source.index]
            active.splice(source.index, 1)
        } else {
            add = active[source.index]
            active.splice(source.index, 1)
        }

        if (destination.droppableId === 'TodosList') {
            active.splice(destination.index, 0, add)
        } else {
            complete.splice(destination.index, 0, add)
        }

        setCompletedTodos(complete)
        setTodos(active)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='App'>
                <span className="heading">Taskify</span>
                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    handleAdd={handleAdd}
                />
                <TodoList
                    index
                    todos={todos}
                    setTodos={setTodos}
                    completedTodos={completedTodos}
                    setCompletedTodos={setCompletedTodos}
                />
            </div>
        </DragDropContext>
    );
}

export default App;
