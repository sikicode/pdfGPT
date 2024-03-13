import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const auth = useAuth();
    return (
      <AppBar sx={{ backgroundColor: "transparent", position: "static", boxShadow: "none" }}>
          <Toolbar sx={{ display: "flex" }} >
              <Logo />
              <div>
                  {auth?.isLoggedIn ? (
                      <>

                      </>) : (<></>) };
              </div>
          </Toolbar>
      </AppBar>
    );
};

export default Header;