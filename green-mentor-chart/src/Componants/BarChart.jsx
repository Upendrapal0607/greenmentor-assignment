import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
export const BarChart = ({ chartData }) => {
  return (
    <DIV>
      <div className="revenue">
        <p>Emission/Revenue</p>
      </div>
      <div className="bar-chart-main">
        <Bar data={chartData} />
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 90%;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  align-items: start;
  border-radius: 12px;

  background: #fff;
  box-shadow: rgba(17, 17, 20, 0.1) 0px 0px 16px;
  .revenue {
    display: flex;
    justify-content: flex-start;
    padding: 10px 0px;
    align-items: center;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .bar-chart-main {
    border: 0px solid green;
    width: 100%;
    padding: 20px;
  }
`;
