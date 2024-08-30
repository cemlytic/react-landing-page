import { CircleCheck } from "lucide-react";
import { pricingOptions } from "../../constants";
import AccentText from "../common/AccentText";
import Button from "../UI/Button";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <AccentText className="text-xl"> (Most Popular) </AccentText>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-500">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CircleCheck />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 text-xl hover:bg-orange-900 transition-all border border-orange-900 rounded-lg duration-200"
              >
                Subscribe
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
