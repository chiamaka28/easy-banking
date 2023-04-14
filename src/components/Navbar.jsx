import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 sticky top-0 z-10 bg-white">
      <img src={logo} alt="/" />
      <img src={hamburger} alt="/" />
    </div>
  );
};

export default Navbar;
