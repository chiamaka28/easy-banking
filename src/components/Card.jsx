const Card = ({ data }) => {
  return (
    <div>
      <div className="">
        <div className=" flex flex-col justify-center items-center mb-4 w-[60px] mx-auto">
          <img src={data.img} alt="" />
        </div>
        <h4 className="text-center mb-4">{data.title}</h4>
        <p className="text-center">{data.text}</p>
      </div>
    </div>
  );
};

export default Card;
