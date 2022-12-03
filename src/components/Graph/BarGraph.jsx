import { Box } from "@mui/material";
import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";


const BarGraph = ({ votos_data, region_data }) => {
  const votos = votos_data.map((voto) => voto.conteo);
  const candidatos = votos_data.map((candidato) => candidato.candidato);

  return (
    <Box>
        <h2>Conteo por Candidato</h2>
        <h3>Region:{}</h3>

        <Bar
          data={{
            labels: candidatos,
            datasets: [
              {
                label: "votos",
                data: votos,
                fill: true,
                backgroundColor: ["red", "blue", "green", "blue", "red", "blue"],
              },
            ],
          }}
        />
      <Box align="center" sx={{ mt: 3 }}></Box>
    </Box>
  );
};

export default BarGraph;
