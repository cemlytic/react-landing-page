import { features } from "../../constants";
import AccentText from "../common/AccentText";

const Features = () => {
  return (
    <div className="relative  mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center flex items-center flex-col gap-4 lg:gap-0">
        <span className="bg-neutral-800 text-orange-500 rounded-full h-6 flex items-center justify-center text-small font-medium px-4 py-2  ">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl ml-10 lg:mt-20 ">
          Easily Build
          <AccentText>Your Projects</AccentText>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 shadow-lg justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="mt-1 mb-6 text-xl">{feature.title}</h3>
                <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
