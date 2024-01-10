import "./App.css";
import styled from "styled-components";
import { SideNavBar } from "./Componants/SideNavBar";
import { Main } from "./Componants/Main";
function App() {
  return (
    <div className="App">
      <DIV>
        <div className="burger">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt="bg"
          />
        </div>
        <div className="side-nav">
          <SideNavBar />
        </div>
        <div className="all-chart">
          <Main />
        </div>
      </DIV>
    </div>
  );
}
const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .burger {
    width: 0%;
    visibility: hidden;
  }
  .burger>img{
width: 20px;
height: 20px;
  }
  .side-nav {
    width: 17%;
    display: inline-flex;
    margin-bottom: 20px;
    flex-direction: column;
    flex-shrink: 0;
    background: #181818;
  }
  .all-chart {
    width: 87%;
  }

  @media (min-width: 300px) and (max-width: 974px) {
    .side-nav {
      visibility: hidden;
      width: 0%;
    }
    .all-chart {
      width: 97%;
    }
    .burger {
      width: 3%;
      visibility: visible;
   
    }
    .burger > img {
      cursor: pointer;
      padding: 20px 0px;
    }
  }
`;
export default App;
