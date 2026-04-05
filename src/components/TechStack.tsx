import { techStack } from "../constants";

const TechStack = () => {
  return (
    <div className="bg-[url('/bg_img.jpg')] bg-cover bg-center px-15 pt-15 pb-36">
      <div className="flex flex-row justify-between items-start align-center">
        <h2 className="font-outfit-bold text-[44px] text-[#FDB12F] m-0 w-1/4">
          MY TECH STACK
        </h2>
        <p className="text-[24px] font-outfit-regular text-white w-1/2">
          Every successful developer has a grasp on certain tools that help them
          develop highly effective software solutions. These are mine.
        </p>
      </div>

      <div className="flex flex-row justify-between items-center mt-36 gap-12 px-60">
        {techStack.map((tech) => (
          <div className="flex flex-col gap-12 items-center justify-center" key={tech.name}>
            
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                className="w-20 h-auto"
              />
                <p className="text-white text-[24px] font-outfit-light">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack