import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import tree_dot from "../Images/tree-dot.png";
import increase from "../Images/increase-arrow.png";
import {Chart as ChartJS} from "chart.js/auto"
export const PieChart = ({ AllEmistion }) => {
  return (
    <DIV>
      <div className="emission-supplier">
        <div>
          <p>Emission by Supplier</p>
        </div>
        <div className="emission-img">
          <img src={increase} alt="" className="emission-icon-1" />
          <img src={tree_dot} alt="" className="emission-icon-2" />
        </div>
      </div>
      <div className="doughnut-chart">
        <Doughnut data={AllEmistion} />
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  width: 100%;

  border-radius: 12px;
  border: 1px solid #ebebeb;

  background: #fff;

  .emission-supplier {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  p {
    font-family: HelveticaNeue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .emission-img {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .emission-icon-2 {
    width: 15px;
    height: 5px;
  }
  .doughnut-chart {
    width: 100%;
  }
`;
