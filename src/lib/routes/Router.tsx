import HomeScreen from "../../screens/Home/HomeScreen";
import linking from "./linking";
import { Route, Routes } from "react-router-dom";
import AboutScreen from "../../screens/About/AboutScreen";

export type RootStackParams = {
  //   Home: NavigatorScreenParams<HomeDrawerParams>;
  //   NewVisa: NavigatorScreenParams<AccountStackParams>;
  //   About: NavigatorScreenParams<NewRequestStackParams>;
  Home: undefined;
  NewVisa: undefined;
  About: undefined;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      {/* <Route path="/about" element={<AboutScreen />} /> */}
    </Routes>
  );
};

export default Router;
