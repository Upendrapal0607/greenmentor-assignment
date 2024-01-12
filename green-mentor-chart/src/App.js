import "./App.css";
import styled from "styled-components";
import { SideNavBar } from "./Componants/SideNavBar";
import { Main } from "./Componants/Main";
import { Icon, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { SideNaveBarDrawer } from "./Componants/SideNavDrawer";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="App">
      <DIV>
        <div className="burger" onClick={onOpen}>
          <Icon as={HamburgerIcon} />
          <SideNaveBarDrawer
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
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
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      /* border: 2px solid red; */
      height: 20px;
      visibility: visible;
      margin-top: 20px;
    }
    .burger > img {
      cursor: pointer;
      padding: 20px 0px;
    }
  }
`;
export default App;
