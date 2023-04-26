import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const footer = () => {
  return (
    <div className="bg-darkBlue ">
      <div className="my-container flex flex-col md:flex-row md:flex-wrap md:justify-between  items-center py-10 gap-y-5">
        <div className="md:flex md:flex-col">
          <div className="mb-5 ">
            <img className="invert brightness-0" src={logo} alt="" />
          </div>
          <div className="flex gap-4">
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="md:flex md:flex-row mb-3 md:gap-x-[40px]">
          <div className="text-white flex flex-col text-center md:text-left gap-y-4 mb-3 md:mb-0">
            <a href="">About US</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
          </div>
          <div className="text-white flex flex-col text-center md:text-left gap-y-4 ">
            <a href="">Careers</a>
            <a href="">Support</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
        <div>
          <div className=" flex justify-center md:justify-start">
            <a
              className="py-[7px] px-5 rounded-2xl capitalize text-white bg-gradient-to-r from-limeGreen to-brightCyan"
              href="/"
            >
              Request Invite
            </a>
          </div>
          <div className="text-white mt-4">
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
