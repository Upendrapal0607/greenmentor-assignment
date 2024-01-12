import React from "react";
import styled from "styled-components";
import logo from "../Images/PETERS_Surgical_LOGO_CMJN.png";
import feDrop from "../Images/fe_drop-down.png";
import water_outLine from "../Images/mdi_water-outline.png";
import energy_program from "../Images/energy-program-saving.png";
import deleteIcom from "../Images/delete-icon.png";
export const SideNavBar = () => {
  return (
    <DIV>
      <div className="logo-box">
        <img src={logo} alt="logo" />
      </div>
      <div className="other-content">
        <div>
          <p style={{ color: "#5C5C5C", textTransform: "uppercase" }}>
            data-in
          </p>
        </div>
        <div>
          <img src={energy_program} alt="" />
          <select className="enery-select" name="" id="">
            <option value="">Energy</option>
            <option value="">Category-2</option>
            <option value="">Category-3</option>
            <option value="">Category-4</option>
            <option value="">Category-5</option>
          </select>
          <img src={feDrop} alt="" />
        </div>
        <div>
          <img src={water_outLine} alt="" />
          <p>Water and Effluents</p>
          <img src={feDrop} alt="" />
        </div>
      </div>
      <div className="energy-box">
        <div>
          <p style={{ color: "#5C5C5C", textTransform: "uppercase" }}>
            ENALYZE
          </p>
        </div>
        <div>
          <img src={energy_program} alt="" />
          <p>Energy</p>
        </div>
        <div>
          <img src={deleteIcom} alt="delete" />
          <p>
            Wast <span className="beta">{"(Beta)"}</span>
          </p>
        </div>
      </div>

      <div className="open-help-btn">
        <button>Open Help Center</button>
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  .logo-box {
    width: 88%;
    border: 0px solid red;
    display: flex;
    padding: 13px 10px 13px 20px;
    align-items: start;
    border-radius: 45px;
    gap: 5px;
  }
  .other-content {
    width: 80%;
    display: flex;
    padding: 10px 15px 15px 15px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-top: 1px solid #2c2c2c;
    border-bottom: 1px solid #2c2c2c;
    background: #181818;
  
  }
  .other-content > div {
    width: 100%;
    display: flex;
    padding: 13px 10px 13px 20px;
    align-items: center;
    border-radius: 45px;
    gap: 5px;
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }
  .other-content > div > img,
  .energy-box > div > img {
    width: 15px;
  }

  .energy-box {
    width: 80%;
    padding: 10px 15px 16px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-top: 1px solid #2c2c2c; 
     border-bottom: 1px solid #2c2c2c;
    background: #181818;
  }
  .energy-box > div {
    width: 100%;
    border: 0px solid red;
    display: flex;
    padding: 13px 10px 13px 20px;
    align-items: center;
    border-radius: 45px;
    gap: 5px;
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }
  .beta {
    color: #02ab6c;
    font-family: HelveticaNeue;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .enery-select {
    outline: none;
    background-color: #02ab6c;

    padding: 6px;
    text-decoration: none;
  }
  .enery-select > option {
    display: flex;
    gap: 6px;
  }

  .open-help-btn {
    width: 100%;
    height: 177px;
    padding-top: 70px;
    flex-shrink: 0;
  }
  .open-help-btn > button {
    width: 75%;
    height: 50px;
    flex-shrink: 0;
    border-radius: 11px;
    background: #02ab6c;
    color: #fff;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }

  @media (min-width: 300px) and (max-width: 974px) {
  
  }
`;
