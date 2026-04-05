import { useRef } from "react";
import gsap from "gsap";

interface LoaderProps {
  progress: number;
}

const Loader = ({ progress }: LoaderProps) => {
  return (
    <div className="fixed inset-0 bg-[#0D1B2A] z-50 flex items-end justify-start p-12">
      <div className="flex flex-col gap-0.5">
        <p className="text-white text-[32px] font-outfit-light -mb-18">
          Initializing Experience
        </p>
        <p className="text-[#FDB12F] text-[400px] font-steelfish-regular -mt-2">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default Loader;
