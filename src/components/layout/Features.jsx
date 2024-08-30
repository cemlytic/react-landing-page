import AccentText from "../common/AccentText";

const Features = () => {
  return (
    <div className="relative  mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-800 text-orange-500 rounded-full h-6 text-small font-medium px-3 py-1">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl ml-10 lg:mt-20 ">
          Easily Build
          <AccentText>Your Projects</AccentText>
        </h2>
      </div>
    </div>
  );
};

export default Features;
