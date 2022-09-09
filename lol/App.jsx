import Navbar from "./components/Navbar"
import Task from "./components/Task"
import Container from "./components/Container"
import taskdata from "./taskdata"
import {useState} from "react"

function App() {

    const [tasks, setTasks] = useState([...taskdata])
    let incompelte = []
    let complete = []

    for(let i = 0; i < tasks.length; i++) {
        if(tasks[i].completed) {
            complete.push(tasks[i])
        }
        else {
            incompelte.push(tasks[i])
        }
    }

    let newtasks = [...tasks]

    const toggleTask = (id) => {
        const task = newtasks.find((t) => t.id === id)
        task.completed = !task.completed
    }

    const completeTasks = () => {
        setTasks(newtasks)
    }

    return (
        <div>
            <Navbar />
            <div className="app-cont">
                <Container title="Tareas por hacer" tasks={incompelte} toggleTask={toggleTask} completeTasks={completeTasks}/>
                <div className="separator"></div>
                <Container title="Tareas completadas"tasks={complete}/>
            </div>
        </div>
    )
}

export default App
