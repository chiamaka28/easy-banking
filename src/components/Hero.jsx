import mockup from "../assets/images/image-mockups.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-between  lg:h-[65vh] my-container">
      <div className="bg-mobile md:bg-desktop bg-left lg:bg-[right_-3rem_top_-5rem] bg-cover   bg-no-repeat py-[70px] md:py-[50px] mr-[-20%]">
        <div className="w-[80%] overflow-visible mx-auto max-w-[400px] mt-[-150px]   md:mt-[-150px] md:w-[60%] md:max-w-[500px] lg:w-[80%] lg:max-w-[80rem]  lg:mr-[-20px]  lg:top-[-150px] lg:right-[-100px]  ">
          <img src={mockup} className="" alt="/" />
        </div>
      </div>
      <div className="md:w-[40%]  lg:py-[5vh] mt-4 mb-20 flex flex-col  justify-center items-center md:justify-start md:items-start">
        <h1 className="text-4xl text-center  md:text-left text-bold">
          Next generation digital banking
        </h1>
        <p className="text-center text-[16px]  md:text-left mt-6 mb-5 ">
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
