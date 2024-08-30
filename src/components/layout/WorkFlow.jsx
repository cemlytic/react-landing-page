import { CircleCheck } from "lucide-react";
import AccentText from "../common/AccentText";
import workflowBg from "../../assets/workflowBg.jpg";
import { checklistElements } from "../../constants";

const WorkFlow = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 mb-4">
        Accelerate your <AccentText>coding workflow</AccentText>
      </h1>
      <div className="flex flex-wrap items-center">
        <div className="p-2 w-full lg:w-1/2">
          <img
            src={workflowBg}
            alt="code"
            className="y-800 shadow-xl rounded-md"
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistElements.map((element, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CircleCheck />
              </div>
              <div>
                <h5 className="mt-1 mb-2text-xl">{element.title}</h5>
                <p className="text-md text-neutral-500">
                  {element.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
