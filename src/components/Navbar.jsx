import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className=" bg-white  relative ">
      <div className="flex justify-between py-5 px-3  my-container relative">
        <img src={logo} alt="/" />
        <ul className="flex gap-6 text- grayishBlue hidden">
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
        </ul>
        <div className="hidden md:block">
          <a
            className="py-[9px] px-5 rounded-2xl capitalize text-white bg-gradient-to-r from-limeGreen to-brightCyan"
            href="/"
          >
            Request Invite
          </a>
        </div>
        <img className="block md:hidden" src={hamburger} alt="/" />
        <div className="absolute top-[4rem] w-[80%] left-[3rem] hidden bg-white">
          <ul className=" gap-6 text- grayishBlue ">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
