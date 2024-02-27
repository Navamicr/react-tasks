import React, { useContext } from 'react'
import { TaskContext } from '../../context/taskContext'
import Task from './Task'

const AllTasks = () => {
    let { task } = useContext(TaskContext)
    return (
        <section id='task'>
            <article>
                <h2>All Tasks</h2>
                <div className="list">
                    {
                        task === "" ? 'loading' : task.length > 0 && task.map(t => {
                            return <Task key={t.id} {...t} />
                        })
                    }
                </div>
            </article>
        </section>
    )
}

export default AllTasks