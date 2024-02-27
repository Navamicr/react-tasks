import React, { useContext, useState } from 'react'
import { TaskContext } from '../../context/taskContext';

const TaskForm = () => {
    let { addTask } = useContext(TaskContext)
    let [state, setState] = useState({
        title: "",
        author: "",
        description: "",
        status: false
    })
    let { title, author, description, status } = state;
    let handleChange = e => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    let handleSubmit = e => {
        e.preventDefault();
        try {
            addTask(title, author, description)
            e.target.firstChild.focus()
            console.log(state)
            setState({ title: "", author: "", description: "" })
        } catch (error) {
            console.log(error)
        }
    }
    console.log(task)


    return (
        <section id='form'>
            <article>
                <h2>Add task to the basket</h2>
                <main>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" placeholder='add title' name='title' value={title} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">author</label>
                            <input type="text" placeholder='add author' name='author' value={author} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">description</label>
                            <textarea name="description" id="description" cols="30" rows="10" value={description} onChange={handleChange}></textarea>

                        </div>

                        <div className="form-group">
                            <button>{status === true ? "loading.." : "add task"}</button>
                        </div>
                    </form>
                </main>
            </article>
        </section>
    )
}

export default TaskForm