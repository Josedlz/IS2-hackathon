import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { withSessionSsr } from "../lib/session";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";

export default function Home({ user, admin }) {
  const handleCheckIn = async () => {
    
  }

	console.log(user);
	console.log(admin);
	let msg = "";
	if (admin === true) msg = "you're an admin!";
	else msg = "you're not an admin :c";

	return (
		<div>
			<Navbar />
			<div className="centered">
				<Head>
					<title>Home</title>
				</Head>
				<div className="stackv">
					<h2>Welcome to the home page {user}!</h2>
					<h2>admin: {msg}</h2>

          <Button variant="contained" onClick={handleCheckIn} >
            Check In! 
          </Button> 
					
          <a href="/taskboard">Go to my tasks</a>
          <hr></hr>

					<a href="/api/logout">Log out</a>
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
