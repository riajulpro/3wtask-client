import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import { Link } from "react-router-dom";
import Person from "@mui/icons-material/Person";
import { useContext } from "react";
import { AuthContext } from "../context/authContextProvider";
import useAxiosPath from "../hooks/useAxios";

export default function IconButtonMenu() {
  const { user, setUser } = useContext(AuthContext);
  const useAxios = useAxiosPath();

  const logoutHandle = () => {
    useAxios
      .delete("/auth/logout")
      .then(() => {
        localStorage.clear("localUser");
        setUser(null);
        console.log("Successfully Logged out!");
      })
      .catch((error) => console.log("Logout error: ", error));
  };

  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "outlined", color: "neutral" } }}
      >
        <Person />
      </MenuButton>
      <Menu>
        {user ? (
          <>
            <MenuItem>
              <Link to={"/dashboard"}>Dashboard</Link>
            </MenuItem>
            <MenuItem onClick={logoutHandle}>Log out</MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <Link to={"/login"}>Login</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/register"}>Sign up</Link>
            </MenuItem>
          </>
        )}
      </Menu>
    </Dropdown>
  );
}
