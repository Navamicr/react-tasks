import React, { useState } from 'react'
import { v1 as uuid } from 'uuid';
import toast, { Toaster } from "react-hot-toast"
import Form from './components/forms/Form'
import TodoList from './components/todo/TodoList'
import FormOutput from './components/forms/FormOutput';

const App = () => {



    let [state, setState] = useState({
        items: [],
        id: uuid(),
        BatchCode: "",
        course: "",
        Date: "",
        Time: "",
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
                BatchCode: state.BatchCode,
                course: state.course,
                Date: state.Date,
                Time: state.Time,
                trainer: state.trainer,



            }
            //want to merge the previous value with the updated value
            let updatedItem = [...state.items, newItem];
            setState({ items: updatedItem, id: uuid(), BatchCode: "", course: "", Date: "", Time: "", trainer: "" })


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
            BatchCode: selectedItem.BatchCode,
            course: selectedItem.course,
            Date: selectedItem.Date,
            Time: selectedItem.Time,
            trainer: selectedItem.trainer,
            id: id
        })
    }



    return (
        <section id='mainBlock'>
            <article>
                {/* <header>
                    <Toaster />
                    <h1></h1>
                </header> */}
                <main>

                    <Form BatchCode={state.BatchCode} course={state.course} Date={state.Date} Time={state.Time} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit} />
                    {/* <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate} /> */}


                </main>
            </article>
        </section>
    )
}

export default App