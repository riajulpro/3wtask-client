import { Outlet } from "react-router-dom";
import { DropdownProvider } from "./context/dropdownContext";
import "../src/index.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <DropdownProvider>
        <Navbar />
        <Outlet />
      </DropdownProvider>
    </div>
  );
};

export default App;
