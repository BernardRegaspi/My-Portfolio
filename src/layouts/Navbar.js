// import { HamburgerIcon } from "@chakra-ui/icons";
import Drawer from "../components/Drawer";
import { Link } from "react-router-dom/cjs/react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="roboto logo">
          iCan't<span className="code roboto">Code();</span>
        </h2>
        <div className="">
          <Drawer />
          {/* <HamburgerIcon className="d-md-none d-lg"/> */}
        </div>
        <div className="links d-none d-md-block">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/project">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
