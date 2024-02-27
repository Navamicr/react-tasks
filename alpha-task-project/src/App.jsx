import React from 'react'
import NavbarContainer from './pages/navbar/NavbarContainer'
import TaskProvider from './context/taskContext'
import TaskForm from './components/taskComp/TaskForm'
import AllTasks from './components/taskComp/AllTasks'

const App = () => {
    return (
        <TaskProvider>
            <header>
                <NavbarContainer />
            </header>
            <main className='flex-container'>
                <TaskForm />
                <AllTasks />

            </main>

        </TaskProvider>
    )
}

export default App