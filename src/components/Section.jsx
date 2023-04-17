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
    <div className=" bg-lightGray w-[100vw]">
      <h2 className="text-3xl px-10 text-center">Why choose Easybank?</h2>
      <p className="text-center text-[16px]">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className=" container mx-auto flex flex-col justify-center items-center gap-12 py-12 ">
        {data.map((d, idx) => (
          <Card data={d} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default section;
