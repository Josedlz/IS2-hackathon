import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/material";

const PieChart = ({ votos_data }) => {
  const conteo = votos_data.map((conteo) => conteo.conteo);
  const disp = ["Válido", "No Válido"]
  return (
    <Box>
      <Doughnut
        data={{
        labels: disp,
        datasets: [
          {
            label: "Disposición de los votos",
            data: conteo,
            fill: true,
            backgroundColor: ["blue", "violet"],
          },
        ],
        hoverOffset: 4,
        }}
      />
    </Box>
  )
}

export default PieChart