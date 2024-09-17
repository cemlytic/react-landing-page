import AccentText from "../common/AccentText";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center">
        Tools and Insights
        <AccentText>for Developers</AccentText>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Unlock your potential with our comprehensive tools and resources
        designed for developers. Dive in now and start building innovative
        solutions to shape the future of technology.
      </p>
      <div className="flex justify-center flex-wrap gap-4 my-10">
        <Button
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3"
          href="#"
        >
          Start for free
        </Button>
        <Button className="border py-3 px-4" href="#">Documentation</Button>
      </div>
    </div>
  );
};

export default Hero;
