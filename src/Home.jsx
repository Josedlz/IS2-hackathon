import { useState } from "react"
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import SelectRegion from './components/Select/SelectRegion'
import { Item } from 'semantic-ui-react';
import BarGraph from './components/Graph/BarGraph';
import BarGraph2 from './components/Graph/BarGraph2';
import PieChart from './components/Graph/PieChart';
import axios from 'axios';

const Home = () => {

    const [candidatosData, setCandidatosData] = useState([])
    const [regionesData, setRegionesData] = useState([])
    const [validoData, setValidoData] = useState([])

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
        console.log("Error while uploading file ", err);
      }
    };

    const getRegiones = async () => {
        const url = `/region/`;
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
    getRegiones()
    getValido()
    return (   
        <> 
         <SelectRegion uploadFiles={getCandidatos}/>

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
