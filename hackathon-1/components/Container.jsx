<<<<<<< HEAD
=======
import TaskInstance from "./TaskInstance"
>>>>>>> 8cf0abfe759cc6568d50607ff90d23e0a44b44a2

import Task from "./Task"
const Container = (props) => {

    const taskslist = props.tasks.map((task) => {
        // console.log(props.tasks)
        return <TaskInstance key={task.id} toggleTask={props.toggleTask} {...task} />
    })

    const handleComplete = () => {
        props.completeTasks()
    }

    return(
        <div className="cont-cont">
            <div className="cont-upper-cont">   
                <p className="cont-title">{props.title}</p>
                {props.title === "Tareas por hacer" && <button className="cont-complete-btn" onClick={handleComplete}>Completar tareas</button>}
            </div>
            {taskslist}
        </div>
    )
}

export default Container