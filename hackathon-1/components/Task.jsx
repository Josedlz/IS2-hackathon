
const Task = (props) => {


    const handleCheck = () => {
        props.toggleTask(props.id)
    }

    return(
        <div className="task-cont">
            <p className="task-title">{props.title}</p>
            <b>{props.startDate} - {props.endDate}</b>
            <p className="task-description">{props.description}</p>
            {!props.completed && <div><i>Completada: </i><input type="checkbox" onClick={handleCheck}></input></div>}
            {props.completed && <b>{props.score} / 10</b>}
        </div>
    )
}

export default Task