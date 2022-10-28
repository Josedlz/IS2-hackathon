import React from 'react'
import { Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarGraph2 = ({ votos_data }) => {
  const votos = votos_data.map((voto) => voto.conteo);
  const region = votos_data.map((region) => region.region);
  console.log(votos_data)
  console.log(votos)
  console.log(region)
  return (
    <Box>
      <Bar
        data={{
              labels: region,
              datasets: [
                {
                  label: "Candidatos de la región ",
                  data: votos,
                  fill: true,
                  backgroundColor: "green",
                },
              ],
            }}
          />
    </Box>
  )
}

export default BarGraph2