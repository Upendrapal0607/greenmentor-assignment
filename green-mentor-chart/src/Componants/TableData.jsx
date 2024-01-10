import React from "react";
import styled from "styled-components";
import download_icon from "../Images/download-icon.png";
import vectorIcon from "../Images/VectorIcon.png";
export const TableData = ({ tableData }) => {
  return (
    <DIV>
      <div className="emission-supplier">
        <div className="supplier-wise">
          <h1>Supplier-wise</h1>
          <img src={vectorIcon} alt="" className="emission-icon-1" />
        </div>
        <div className="emission-img">
          <img src={download_icon} alt="" className="emission-icon-1" />
          <p>Download</p>
        </div>
      </div>
      <div className="doughnut-chart">
        <table>
          <thead>
            <tr>
              <th>MONTH</th>
              <th>{"EMISSIONS(IN CO2E)"}</th>
              <th>REVENUE/EMISSION RATIO</th>
              <th>YOY R/E CHANGE</th>
            </tr>
          </thead>
          <tbody>
            {tableData
              .filter((item) => item.yoyChange)
              .map((item, index) => (
                <tr key={item.id}>
                  <td>{item.month}</td>
                  <td>{item.emission}</td>
                  <td>{item.re}</td>
                  <td
                    style={{
                      color:
                        parseInt(item.yoyChange) > 0 ? "#008C58" : "#FF0000D6",
                    }}
                  >
                    {item.yoyChange}
                    {parseInt(item.yoyChange) > 0 ? "↓" : "↑"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #ebebeb;

  background: #fff;

  .supplier-wise{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
  .supplier-wise > h1 {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .supplier-wise > img {
    width: 20px;
    height: 20px;
   
  }
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

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  thead {
    background-color: #f2f2f2;
  }
  th {
    font-family: HelveticaNeue;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    padding: 16px 8px;
    border: 1px solid #ddd;
  }
  td {
    padding: 16px 8px;
    text-align: left;
    border: 1px solid #ddd;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  td {
    text-align: center;
  }
`;
