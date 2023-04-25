import Card from "./Card";
import img from "../assets/images/icon-online.svg";
const data = [
  {
    img: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681684146/icon-online_zgw2vb.svg",
    title: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances  wherever you are in the world.",
  },
  {
    img: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681684146/icon-budgeting_mzbvio.svg",
    title: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    img: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681684146/icon-onboarding_v0q4lo.svg",
    title: "Fast Onboarding",
    text: " We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    img: "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681684145/icon-api_sgloeu.svg",
    title: "Open Api",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const section = () => {
  return (
    <div className=" bg-lightGray overflow-visible">
      <div className="my-container pt-[6rem]  ">
        <h2 className="text-3xl  text-center lg:text-left ">
          Why choose Easybank?
        </h2>
        <p className="text-center text-[16px] lg:text-left lg:w-[50%]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className=" my-container mx-auto flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center gap-12 md:gap-7 py-12 ">
        {data.map((d, idx) => (
          <Card data={d} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default section;
