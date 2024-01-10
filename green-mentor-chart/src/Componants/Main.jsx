import React, { useEffect, useState } from "react";
import styled from "styled-components";
import downBlack from "../Images/fe_drop-down-black.png";
import vector from "../Images/Vector.png";
import vectorIcon from "../Images/VectorIcon.png";
import group from "../Images/Group.png";
import ellips from "../Images/Ellipse.png";
import { BarChart } from "./BarChart";
import revenueData from "../db.json";
import { PieChart } from "./PieChart";
import { TableData } from "./TableData";
export const Main = () => {
  const [AllData, setAllData] = useState(revenueData.RevanueData);
  const [data, setData] = useState(revenueData.RevanueData);
  const [changeVelue, setChaingeValue] = useState("");
  const [AllRevenue, setAllRevenue] = useState({
    labels: [],
    datasets: [],
  });
  const [AllEmistion, setAllEmistion] = useState({
    labels: [],
    datasets: [],
  });

  const [totalEmistion, setTotalEmistion] = useState(0);

  const FormateData = (data) => {
    let arraOfMonth = [...new Set(data.map((el) => el.month))];
    let totalEmistion = 0;
    let arrOfRevenue2022 = [];
    const companyName = {};
    let arrOfRevenue2023 = [];
    let arrOfRe2022 = [];
    let arrOfRe2023 = [];
    for (let el of data) {
      totalEmistion += +el.emission;
      if (el.supplier in companyName) {
        companyName[el.supplier] += +el.emission;
      } else {
        companyName[el.supplier] = +el.emission;
      }

      if (el.year == "2022") {
        arrOfRevenue2022.push(el.emission);
        arrOfRe2022.push(el.re);
      } else {
        arrOfRevenue2023.push(el.emission);
        arrOfRe2023.push(el.re);
      }
    }

    console.log({ companyName, totalEmistion });

    const emissionData = {
      labels: Object.keys(companyName),
      datasets: [
        {
          label: "Co2e",
          data: Object.values(companyName),
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(78, 158, 211)",
            "rgba(255, 99, 133, 0.615)",
            "rgb(230, 169, 27)",
            "rgba(239, 133, 156, 0.615)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const chartData = {
      labels: arraOfMonth,
      datasets: [
        {
          label: "Emission-2022",
          data: arrOfRevenue2022,
          backgroundColor: "#8beb7e",
          borderWidth: 1,
          pointRadius: 4,
        },
        {
          label: "Emission-2023",
          data: arrOfRevenue2023,
          backgroundColor: "#766cd1",
          borderWidth: 1,
          pointRadius: 4,
        },
        {
          label: "R/E-2022",
          data: arrOfRe2022,
          backgroundColor: "#d16c6c",
          borderColor: "#d16c6c",
          borderWidth: 1,
          pointRadius: 4,
          stack: "combined",
          type: "line",
        },
        {
          label: "R/E-2023",
          data: arrOfRe2023,
          backgroundColor: "#ecd90c",
          borderColor: "#ecd90c",
          stack: "combined",
          type: "line",
        },
      ],
    };

    setAllRevenue(chartData);
    setAllEmistion(emissionData);
  };

  useEffect(() => {
    FormateData(data);
  }, [data]);

  const HandleChange = (e) => {
    let [startMonth, startYear, EndMonth, EndYear] = e.target.value.split(" ");
    setChaingeValue(e.target.value);
    console.log(startMonth, startYear, EndMonth, EndYear);
    let filterData = [...revenueData.RevanueData];
    console.log({ filterData });
    filterData = filterData.filter((el) => {
      if (
        (el.year <= startYear && startMonth <= el.month) ||
        (el.year >= EndYear && el.month >= EndMonth)
      ) {
        return el;
      }
    });
    setData(filterData);
    setAllData(filterData);
  };

  return (
    <DIV>
      <div className="nav">
        <div className="nav-start">
          <img src={group} alt="circle" />
          <p>Category-1</p>
        </div>
        <div className="nav-end">
          <div className="profile-avatar">
            <img src={ellips} alt="avatar" />
            <img src={downBlack} alt="select" />
          </div>
          <div className="notification">
            <img src={vector} alt="nnotification" />
          </div>
        </div>
      </div>

      <div className="select-date">
        <select onChange={HandleChange} name="" id="">
          <option value="Jan 2022 Dec 2022">
            Show Timeline: Jan'22-Dec'22 |
          </option>
          <option value="Jan 2023 Nov 2023">
            Show Timeline: Jan'23-Nov'23 |
          </option>
          <option value="Mar 2022 Oct 2023">
            Show Timeline: Mar'22-Oct'23 |
          </option>
          <option value="Apr 2022 Sep 2023">
            Show Timeline: Apr'22-Sep'23 |
          </option>
        </select>
      </div>
      <div className="four-cord">
        <div>
          <div className="all-icon">
            <p>Current Year Emissions</p>
            <img src={vectorIcon} alt="icon" />
          </div>

          <div className="button-box-1">
            <h3>399699 Co2</h3>
            <p>6.7% YOY!</p>
          </div>
        </div>
        <div>
          <div className="all-icon">
            <p>Revenue to emission ratio</p>
            <img src={vectorIcon} alt="icon" />
          </div>

          <div className="button-box-2">
            <h3>136.0</h3>
            <p>3.7% YOY!</p>
          </div>
        </div>
        <div>
          <div className="all-icon">
            <p>Category-1</p>
            <img src={vectorIcon} alt="icon" />
          </div>

          <div className="button-box-3">
            <h2>32% of Scope3</h2>
          </div>
        </div>
        <div>
          <p className="number-supplier">Total number of reached suppliers</p>
          <h1>148</h1>
        </div>
      </div>
      <BarChart chartData={AllRevenue} />
      <div className="pie-chart-table">
        <div className="pie-chart">
          <PieChart AllEmistion={AllEmistion} />
        </div>
        <div className="table">
          <TableData tableData={AllData} />
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .nav {
    width: 100%;
    display: flex;
    height: 64px;
    padding: 0px 20px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border: 0px solid red;
  }
  .nav-start,
  .nav-end {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nav-start img,
  .nav-end img {
    width: 16px;
  }
  .profile-avatar {
    display: flex;
    align-items: center;
  }
  .profile-avatar > img {
    width: 20px;
    display: flex;
    align-items: center;
  }
  .nav-start > p {
    color: #000;
    font-family: HelveticaNeue;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .select-date {
    width: 100%;
    display: flex;
    height: 45px;
    padding: 0px 38px 0px 0px;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    border: 0px solid red;
  }

  .select-date > select {
    border: 1px solid green;
    color: #0000007a;
    border-radius: 4px;
    padding: 4px 4px 2px 2px;
    font-family: HelveticaNeue;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
  }
  .four-cord {
    width: 92%;
    border: 0px solid green;

    padding: 20px 20px;
    display: flex;
    gap: 1rem;

    justify-content: flex-start;
    align-items: center;
  }
  .four-cord > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0px 0px 0px 20px;
    align-items: start;
    width: 25%;
    color: #000000cc;
    border-radius: 12px;
    box-shadow: rgba(17, 17, 20, 0.1) 0px 0px 16px;
  }
  .four-cord > div:nth-child(4) {
    display: flex;
    flex-direction: column; 
    width: 18%;
    border: 1px solid #ebebeb;
    color: #fff;
    padding: 0px;
    background: rgba(2, 171, 108, 0.67);
    box-shadow: rgba(17, 17, 20, 0.1) 0px 0px 16px;
    align-items: center;
  }
  h1{
    margin-top: -10px;
  }
  .all-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .all-icon img {
    width: 14px;
    height: 14px;
  }
  .button-box-1,
  .button-box-2,
  .button-box-3 {
    width: 80%;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    display: flex;
    border: 2px solid #eeedea;
    /* padding: 14px 12px 12px 15px; */
    align-items: center;
    align-self: stretch;
  }
  .button-box-1 > p,
  .button-box-2 > p {
    color: #ff00008b;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .button-box-1 {
    border-left: 6px solid red;
    background-color: rgba(224, 48, 33, 0.04);
  }
  .button-box-2 {
    background-color: rgba(255, 196, 0, 0.04);
    border-left: 6px solid yellow;
  }
  .button-box-3 {
    background-color: rgba(59, 184, 94, 0.04);
    border-left: 6px solid #3bb85e;
  }
  h2 {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .number-suplier {
    color: #fff;
    font-family: HelveticaNeue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
  h1 {
    color: rgba(255, 255, 255, 0.84);

    text-align: center;
    font-family: HelveticaNeue;
    font-size: 46px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .pie-chart-table {
    width: 100%;
    gap: 1rem;

    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    padding: 20px 20px;
    margin-top: 20px;
  }
  .pie-chart {
    width: 45%;
    background: #fff;
    box-shadow: rgba(17, 17, 20, 0.1) 0px 0px 16px;
    border-radius: 12px;
  }

  .table {
    width: 55%;
    background: #fff;
    box-shadow: rgba(17, 17, 20, 0.1) 0px 0px 16px;
    border-radius: 12px;
  }

  @media (min-width: 667px) and (max-width: 1050px) {
    .four-cord > div {
      width: 40%;
    }
    .four-cord > div:nth-child(4) {
      width: 40%;
      border: 1px solid #ebebeb;
      color: #fff;
      padding: 0px;
      background: rgba(2, 171, 108, 0.67);
      box-shadow: rgba(17, 17, 20, 0.1) 0px 0px 16px;
      align-items: center;
    }
    .four-cord {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (min-width: 300px) and (max-width: 667px) {
    .four-cord > div {
      width: 100%;
    }
    .four-cord {
      flex-wrap: wrap;
    }
    .four-cord > div:nth-child(4) {
      width: 70%;
      border: 1px solid #ebebeb;
      color: #fff;
      padding: 0px;
      background: rgba(2, 171, 108, 0.67);
      box-shadow: rgba(17, 17, 20, 0.1) 0px 0px 16px;
      align-items: center;
    }

    .pie-chart-table {
      flex-direction: column;
    }
    .pie-chart,
    .table {
      width: 100%;
    }
  }
`;
