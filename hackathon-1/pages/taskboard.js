import Head from "next/head";
import Image from "next/image";
import { withSessionSsr } from "../lib/session";
import Button from "@mui/material/Button";

import Navbar from "../components/Navbar"
import Task from "../components/Task"
import Container from "../components/Container"
import taskdata from "./taskdata"
import {useState} from "react"

// require('../styles/Taskboard.css')
// import styles from '../styles/Taskboard.module.css'

export default function Taskboard({ user, admin }) {

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


export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, res }) {
    const user = req.session.email;

    if (user === undefined) {
      console.log("no user")
      res.setHeader("location", "/login");
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }

    return {
      props: { user: req.session.email, admin: req.session.isAdmin },

    };
});



// function App() {

//     const [tasks, setTasks] = useState([...taskdata])
//     let incompelte = []
//     let complete = []

//     for(let i = 0; i < tasks.length; i++) {
//         if(tasks[i].completed) {
//             complete.push(tasks[i])
//         }
//         else {
//             incompelte.push(tasks[i])
//         }
//     }

//     let newtasks = [...tasks]

//     const toggleTask = (id) => {
//         const task = newtasks.find((t) => t.id === id)
//         task.completed = !task.completed
//     }

//     const completeTasks = () => {
//         setTasks(newtasks)
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className="app-cont">
//                 <Container title="Tareas por hacer" tasks={incompelte} toggleTask={toggleTask} completeTasks={completeTasks}/>
//                 <div className="separator"></div>
//                 <Container title="Tareas completadas"tasks={complete}/>
//             </div>
//         </div>
//     )
// }

// export default App

