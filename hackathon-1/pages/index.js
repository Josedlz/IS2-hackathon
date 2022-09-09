import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { withSessionSsr } from "../lib/session";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";

import postWorkingStatus from "./api.client/postWorkingStatus";
import postCheckin from "./api.client/postCheckin";
import postCheckout from "./api.client/postCheckout";

// postCheckout
export default function Home({ user, admin }) {
  const [working, setWorking] = useState(false);
  useEffect(()=> {
	(async () => {
		try{
			const response = await postWorkingStatus({email: user});
			setWorking(response.data.working)
		}
		catch(e){
			console.log('e',e)
			setWorking(true)
		}
	})();
  }, [])
  const handleCheckout = async () => {
	(async () => {
		try{
			const response = await postCheckout({email: user})
			alert(response.data)
			setWorking(false)
			// setWorking(!response.data.working)
		}
		catch(e){
			console.log('e',e)
			setWorking(true)
		}
	})();
  }
  const handleCheckIn = async () => {
	try{
		const body = {email: user} 
		const response = await postCheckin(body);
		setWorking(true)
		alert(response.data)
	}
	catch(e){
		console.log(e);
		alert('Error checking in');
	}
  }
	const msg = admin === true? "you're an admin!": "you're not an admin";
	return (
		<div>
			<Navbar />
			<div className="centered">
				<Head>
					<title>Home</title>
				</Head>
				<div className="stackv">
<<<<<<< HEAD
					<h2>Welcome to the home page {user}!</h2>
					<h2>admin: {msg}</h2>
		{
			working?
			<Button variant="contained"  onClick={handleCheckout} >
			Check Out! 
			</Button> :
			<Button variant="contained"  onClick={handleCheckIn} >
            Check In! 
         	 </Button> 
		}		
          <a href="/taskboard">Go to my tasks</a>
=======
					<h2>Welcome to the home page, {user}!</h2>
					{/* <h2>admin: {msg}</h2> */}

          <Button variant="contained" onClick={handleCheckIn} >
            Check In! 
          </Button> 
					
>>>>>>> 8cf0abfe759cc6568d50607ff90d23e0a44b44a2
          <hr></hr>
          <a href="/taskboard"> - Go to my tasks - </a>

          {!admin ? (
            <h1>no admin rights 😢</h1>
          ) : (
          <>
            <h1>🔥🔥 ADMIN RIGHTS 🔥🔥</h1>

            
          </>
          )}
            

				</div>
			</div>
		</div>
	);
}

export const getServerSideProps = withSessionSsr(
	async function getServerSideProps({ req, res }) {
		const user = req.session.email;

		if (user === undefined) {
			console.log("no user");
			res.setHeader("location", "/login");
			res.statusCode = 302;
			res.end();
			return { props: {} };
		}

		return {
			props: { user: req.session.email, admin: req.session.isAdmin },
		};
	}
);
