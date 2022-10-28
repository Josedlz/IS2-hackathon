import React from "react";
import { Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";

const BarGraph2 = ({ votos_data }) => {
  const votos = votos_data.map((voto) => voto.conteo);
  const region = votos_data.map((region) => region.region);

  return (
    <Box>
      <h2>Conteo por Región</h2>
      <Bar
        data={{
          labels: region,
          datasets: [
            {
              label: "",
              data: votos,
              fill: true,
              backgroundColor: ["red", "blue", "green", "blue", "red", "blue"],
            },
          ],
        }}
        options={{
          label: {
            display: false,
          },
        }}
      />
    </Box>
  );
};

export default BarGraph2;
