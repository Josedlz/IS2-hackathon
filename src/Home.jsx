import { useState } from "react"
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import SelectRegion from './components/Select/SelectRegion'
import { Item } from 'semantic-ui-react';
import BarGraph from './components/Graph/BarGraph';
import BarGraph2 from './components/Graph/BarGraph2';
import PieChart from './components/Graph/PieChart';
import axios from 'axios';
import { useEffect, useRef } from "react";

const Home = () => {
    const [candidatosData, setCandidatosData] = useState([])
    const [regionesData, setRegionesData] = useState([])
    const [validoData, setValidoData] = useState([])

    const query = useRef("")

    const setQuery = (newQuery) => {
        query.current = newQuery
    }

    useEffect(() => {
      try{
        getCandidatos(query.current)
        getRegiones(query.current)

      }catch(error){
        console.log(error)
      }
    }, [query]);
    
    useEffect(() => {
      const interval = setInterval(() => {
        getCandidatos(query.current)
      }, 3000);
      getRegiones(query.current)
      getValido()
      return () => clearInterval(interval);
    }, []);


    const getCandidatos = async (query) => {
      const url = `/votos/${query}`;
      try{ 
        const res = await axios.get(url, { headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },})
        console.log(res.data);
        setCandidatosData(res.data);
      }
      catch(error){
        console.log("Error while uploading file ", error);
      }
    };

    const getRegiones = async (query) => {
        const url = `/region/${query}`;
        try{ 
          const res = await axios.get(url, { headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },})
          console.log(res.data);
          setRegionesData(res.data);
        }
        catch(error){
          console.log("Error while uploading file ", err);
        }
      };

      const getValido = async (query) => {
        const url = `/valido/`;
        try{ 
          const res = await axios.get(url, { headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },})
          console.log(res.data);
          setValidoData(res.data);
        }
        catch(error){
          console.log("Error while uploading file ", err);
        }
      };

    return (   
        <> 
         <SelectRegion uploadFiles={getCandidatos} setQuery={setQuery}/>
            <Container>
                <Grid container spacing={2}>
                    <Grid Item my={4}>
                    <Item>
                        <BarGraph votos_data={candidatosData} key="1" />
                    </Item>
                    <Item>
                        <BarGraph2 votos_data={regionesData} key="2" />
                    </Item>
                    <Item>
                        <PieChart votos_data={validoData} key="3" />
                    </Item>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home;
