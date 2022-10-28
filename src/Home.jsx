import { useState } from "react"
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import SelectRegion from './components/Select/SelectRegion'
import { Item } from 'semantic-ui-react';
import BarGraph from './components/Graph/BarGraph';
import axios from 'axios';

const Home = () => {

    const [candidatosData, setCandidatosData] = useState([])

    const uploadFiles = async (query) => {
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

    return (   
        <> 
         <SelectRegion uploadFiles={uploadFiles}/>
            <Container>
                <Grid container spacing={2}>
                    <Grid Item my={4}>
                    <Item>
                        <BarGraph votos_data={candidatosData} key="1" />
                    </Item>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home;
