import mockup from "../assets/images/image-mockups.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse   overflow-hidden md:h-[45vh] lg:h-[65vh]">
      <div className="bg-mobile md:bg-desktop bg-left md:top-right bg-cover   bg-no-repeat py-[70px] md:py-0 ">
        <div className="w-[80%] mx-auto max-w-[400px] mt-[-150px] z-[10000]  md:mt-[-100px] md:max-w-[500px]  lg:max-w-[650px]  lg:mr-[-70px]  lg:top-[-150px] lg:right-[-100px]">
          <img src={mockup} className="" alt="/" />
        </div>
      </div>
      <div className="container md:w-[55%] mt-4 mb-20">
        <h1 className="text-4xl text-center  md:text-left text-bold">
          Next generation digital banking
        </h1>
        <p className="text-center text-[16px]  md:text-left mt-6 mb-5">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button text="request invite" />
      </div>
    </div>
  );
};

export default Hero;
