import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useRef, useEffect} from 'react'

export default function Home() {

  const [data, setData] = useState()
  const [errormsg, setError] = useState()
  const userloginelem = useRef()
  const passloginelem = useRef()

  useEffect(() => {
    if(!data) return;
    
    // aqui se hace request a backend
    console.log("data=>", data)

}, [data]);

  const validateFields = () => {
    setError("");
    try{
      if(userloginelem.current.value ==="" && passloginelem.current.value === "")
        throw "Invalid username or password"
    }
    catch(e){
      console.log("e=>", e)
      setError(e)
    }

  }

  const getData = () => {
    validateFields();
    const userData = {
      username: userloginelem.current.value,
      password: passloginelem.current.value
    }
    setData(userData)
  }

  //SI DEBERIA WTF
  return (
    <>
      <div>
        <h1>Login</h1>
        <input ref={userloginelem} type="text" placeholder="username"></input>
        <input ref={passloginelem} type="password" placeholder="password"></input>
        <button onClick={getData}>Log in</button>
        <p>{errormsg}</p> 
      </div>
      <h2>Or</h2>
      <div>
      <h1>Register</h1>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <input type="password" placeholder="repeat password"></input>
        <button>Register</button>
      </div>
    </>
  )
}
