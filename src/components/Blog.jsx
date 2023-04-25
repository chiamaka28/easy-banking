const Card = ({ data }) => {
  return (
    <div className="my-container max-w-[350px] md:max-w-[250px] mx-auto  mb-9 shadow-lg rounded-md overflow-hidden">
      <div>
        <img
          className="object-cover h-46 w-full mb-3"
          src={data.image}
          alt=""
        />
        <div className="mb-3 py-5 px-6">
          <p className="text-[12px] mb-3">{data.author}</p>
          <h4 className="font-semibold">{data.title}</h4>
          <p className="text-[14px]">{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
