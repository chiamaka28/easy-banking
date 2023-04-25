import Blog from "./Blog";

const data = [
  {
    image:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681684147/image-currency_y9jopb.jpg",
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    content:
      " The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681684148/image-restaurant_t7akrl.jpg",
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set  realistic limits each month. That means you …",
  },
  {
    image:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681684148/image-plane_omwemt.jpg",
    author: " By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    content:
      " We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … ",
  },
  {
    image:
      "https://res.cloudinary.com/dzmpjgmes/image/upload/v1681684148/image-confetti_udusc8.jpg",
    author: " By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    content:
      " After a lot of hard work by the whole team, we’re excited to launch our closed beta.  It’s easy to request an invite through the site ... ",
  },
];

const Articles = () => {
  return (
    <div className="mb-14 my-container">
      <div>
        <h3 className="text-3xl text-center md:text-left my-7">
          Latest Articles
        </h3>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap ">
        {data.map((d, idx) => (
          <Blog data={d} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
