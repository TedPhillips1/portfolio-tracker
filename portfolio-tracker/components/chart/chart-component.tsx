import { ChartDiv } from "./chart-styled";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { withTheme } from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartComponent() {
  return (
    <ChartDiv>
      <Line
        height={395}
        width={600}
        options={{
          maintainAspectRatio: false,

          scales: {
            y: {
              ticks: {
                color: "#fff",
              },
              title: {
                display: true,
                align: "center",
                text: "Total Value (£)",
                color: "#fff",
              },
            },
            x: {
              ticks: {
                color: "#fff",
              },
              title: {
                display: true,
                align: "center",
                text: "Time (DD/MM/YY)",
                color: "#fff",
              },
            },
          },
          color: "#fff",
        }}
        data={{
          labels: [
            "15/01/22",
            "22/01/22",
            "29/01/22",
            "05/02/22",
            "12/02/22",
            "19/02/22",
            "26/02/22",
            "05/03/22",
          ],
          datasets: [
            {
              label: "Total Value",
              data: [
                9469.26, 11389.56, 12886.73, 10321.89, 11987.36, 13621.53,
                11561.34, 10864.2,
              ],
              borderColor: "#fff",
              pointBorderColor: "#fff",
              pointBackgroundColor: "#fff",
            },
          ],
        }}
      />
    </ChartDiv>
  );
}

export default ChartComponent;
