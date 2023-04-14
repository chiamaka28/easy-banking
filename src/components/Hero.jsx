import mockup from "../assets/images/image-mockups.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="bg-mobile lg:bg-desktop bg-left bg-cover relative max-w-full bg-no-repeat py-[150px] lg:py-0 md:fixed md:right-[-50px] md:top-0">
        <div className="w-[80%] mx-auto max-w-[350px]  md:max-w-[600px] absolute inset-x-0 top-[-120px] md:relative md:right-0 md:top-[-50px]">
          <img src={mockup} alt="/" />
        </div>
      </div>
      <div className="container md:w-[50%]">
        <h1 className="text-4xl text-center">
          Next generation digital banking
        </h1>
        <p className="text-center text-[18px]">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
