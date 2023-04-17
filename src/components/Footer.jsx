import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import Button from "./Button";

const footer = () => {
  return (
    <div className="bg-darkBlue flex flex-col  items-center py-10 gap-y-5">
      <div>
        <img className="invert brightness-0" src={logo} alt="" />
      </div>
      <div className="flex gap-4">
        <img src={facebook} alt="" />
        <img src={youtube} alt="" />
        <img src={twitter} alt="" />
        <img src={pinterest} alt="" />
        <img src={instagram} alt="" />
      </div>
      <div className="text-white flex flex-col items-center gap-y-4 ">
        <a href="">About US</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
      </div>
      <div className="text-white flex flex-col items-center gap-y-4 ">
        <a href="">Careers</a>
        <a href="">Support</a>
        <a href="">Privacy Policy</a>
      </div>
      <Button text="request invite" />
      <div className="text-white">
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default footer;
