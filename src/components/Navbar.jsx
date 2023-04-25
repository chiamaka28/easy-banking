import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className=" bg-white overflow-hidden relative ">
      <div className="flex justify-between p-4  my-container">
        <img src={logo} alt="/" />
        {/* <ul className="flex gap-6 text- grayishBlue ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul> */}
        <img src={hamburger} alt="/" />
      </div>
    </nav>
  );
};

export default Navbar;
