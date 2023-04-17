const Button = ({ text }) => {
  return (
    <div className=" flex justify-center md:justify-start">
      <a
        className="py-[7px] px-5 rounded-2xl capitalize text-white bg-gradient-to-r from-limeGreen to-brightCyan"
        href="/"
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
