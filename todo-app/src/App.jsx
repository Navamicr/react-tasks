import React, { useState } from 'react'
import { v1 as uuid } from 'uuid';
import toast, { Toaster } from "react-hot-toast"
import Form from './components/forms/Form'
import TodoList from './components/todo/TodoList'

const App = () => {
    let [state, setState] = useState({
        items: [],
        id: uuid(),
        course: "",
        trainer: ""
    })

    let handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        try {
            // console.log(state)
            let newItem = {
                id: state.id,
                course: state.course,
                trainer: state.trainer
            }
            //want to merge the previous value with the updated value
            let updatedItem = [...state.items, newItem];
            setState({ items: updatedItem, id: uuid(), course: "", trainer: "" })


            console.log(state)

        } catch (error) {
            console.log(error)
        }

    }

    let handleDelete = (id) => {
        let filteredItem = state.items.filter(item => item.id !== id)
        setState({ items: filteredItem })
    }
    let handleUpdate = (id) => {
        let editContent = state.items.filter(item => item.id !== id)
        let selectedItem = state.items.find((item) => item.id === id)
        setState({
            items: editContent,
            course: selectedItem.course,
            trainer: selectedItem.trainer,
            id: id
        })
    }



    return (
        <section id='mainBlock'>
            <article>
                <header>
                    <Toaster />
                    <h1>Todo App</h1>
                </header>
                <main>
                    <Form course={state.course} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit} />
                    <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                </main>
            </article>
        </section>
    )
}

export default App