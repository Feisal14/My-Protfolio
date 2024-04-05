import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { useEffect, useState } from "react";

import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {

    const [navExpanded, setNavExpanded] = useState(false)

    const location = useLocation()

    useEffect(() => {  
setNavExpanded(false)
    }, [location])
  return (
    <div className="navbar" id={navExpanded ? "open" : "close" }>
      <div className="toggleButton">
        <button onClick={() => {
            setNavExpanded((prev  => !prev))
        }}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
