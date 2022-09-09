import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { withSessionSsr } from "../lib/session";
import Button from '@mui/material/Button';

export default function Home({ user }) {
  const handleCheckIn = async () => {
    
  }


  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <h2>Welcome to the home page {user.email}!</h2>
      <Button variant="contained" onClick={handleCheckIn} >
        Check In! 
      </Button> 
      <a href='/api/logout'>Logout</a>
    </div>
  )
}


export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, res }) {
    const user = req.session.email;
    console.log(user)

    if (user === undefined) {
      console.log("no user")
      res.setHeader("location", "/login");
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }

    return {
      props: { user: req.session.email },
    };
});
