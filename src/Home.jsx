import { useState } from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import SelectRegion from "./components/Select/SelectRegion";
// import { Item } from "semantic-ui-react";
import BarGraph from "./components/Graph/BarGraph";
import BarGraph2 from "./components/Graph/BarGraph2";
import PieChart from "./components/Graph/PieChart";
import axios from "axios";
import { useEffect, useRef } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	justifyContent: "center",
}));

const Home = () => {
	const [candidatosData, setCandidatosData] = useState([]);
	const [regionesData, setRegionesData] = useState([]);
	const [validoData, setValidoData] = useState([]);

	const query = useRef("");

	const setQuery = (newQuery) => {
		query.current = newQuery;
		console.log(query.current);
	};

	useEffect(() => {
		try {
			getCandidatos(query.current);
			getRegiones(query.current);
		} catch (error) {
			console.log(error);
		}
	}, [query]);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("fetching...");
			getCandidatos(query.current);
			getRegiones(query.current);
			getValido();
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const getCandidatos = async (query) => {
		const url = `/votos/${query}`;
		try {
			const res = await axios.get(url, {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
				},
			});
			console.log(res.data);
			setCandidatosData(res.data);
		} catch (error) {
			console.log("Error while uploading file ", error);
		}
	};

	const getRegiones = async (query) => {
		const url = `/region/${query}`;
		try {
			const res = await axios.get(url, {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
				},
			});
			console.log(res.data);
			setRegionesData(res.data);
		} catch (error) {
			console.log("Error while uploading file ", error);
		}
	};

	const getValido = async (query) => {
		const url = `/valido/`;
		try {
			const res = await axios.get(url, {
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
				},
			});
			console.log(res.data);
			setValidoData(res.data);
		} catch (error) {
			console.log("Error while uploading file ", error);
		}
	};

	return (
		<>
      <h1>Votos en Tiempo Real 📰👍</h1>
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={6}
					direction="row"
					justifyContent="center"
					alignItems="center"
					justify="center"
				>
					<Grid item xs={12} >
						<Item>
							<SelectRegion uploadFiles={getCandidatos} setQuery={setQuery} />
							<BarGraph votos_data={candidatosData} region_data={query} key="1" />
						</Item>
					</Grid>
					<Grid item xs={6}>
						<Item>
							<BarGraph2 votos_data={regionesData} key="2" />
						</Item>
					</Grid>
					<Grid item xs={6}>
						<Item>
							<PieChart votos_data={validoData} key="3" />
						</Item>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Home;
