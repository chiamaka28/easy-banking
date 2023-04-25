const Card = ({ data }) => {
  return (
    <div className="my-container">
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start max-w-[350px] md:max-w-[250px]">
        <div className=" mb-4  mx-auto md:mx-0 w-[60px]">
          <img src={data.img} alt="" />
        </div>
        <h4 className="text-center md:text-left mb-4">{data.title}</h4>
        <p className="text-center md:text-left ">{data.text}</p>
      </div>
    </div>
  );
};

export default Card;
