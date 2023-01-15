import { BrowserRouter } from "react-router-dom";
import { NavHeader } from "./components/nav-header/NavHeader";
import Router from "./lib/routes/Router";
import styled from "styled-components";

const App = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <NavHeader />
        <Router />
      </BrowserRouter>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  flex: 1;
  color: white;
  align-items: center
  font-family: Circular20-Medium, sans-serif;
`;

export default App;
