import { Box } from "@mui/material";
import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";


const BarGraph = ({ votos_data }) => {
  const votos = votos_data.map((voto) => voto.conteo);
  const candidatos = votos_data.map((candidato) => candidato.candidato);

  return (
    <Box sx={{ mt: 5, md: 3, width: "85%" }}>
        <h2>Conteo por Candidato</h2>
        <Bar
          data={{
            labels: candidatos,
            datasets: [
              {
                label: "Candidatos de la región ",
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
