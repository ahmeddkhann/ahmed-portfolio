"use client"
import { useState } from "react";
import { cn } from "../../lib/utils";
import GridGlobe from "./GridGlobe";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import animationData from "../../data/confetti.json"
import MagicButton from "./magicButton";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto" // Adjusted for larger screens
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  spareImg,
  titleClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  id: number;
  titleClassName?: string;
}) => {

  const[copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`iamahmedkhan02@gmail.com`)
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "relative group overflow-hidden hover:shadow-lg transition duration-300 p-4 rounded-lg dark:bg-black bg-white border dark:border-white/[0.1] shadow-md", // Adjust shadows and padding
        className
      )}
      style={{
        backgroundColor: "#020024", // Gradient background
        backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
      }}
    >
      <div className="flex justify-center items-center h-2"> {/* Adjust height */}
        <div className="w-full h-full absolute top-0 left-0">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover h-full w-full rounded-md")} // Adjust image sizing
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover w-full rounded-md"
            />
          )}
        </div>

        <div className={cn(
          titleClassName, 'group-hover/ bento:translate-x-2 transition duration-200 relative z-10'
        )}>
          <div className="font-sans md:ml-4 font-bold text-lg lg:text-xl mt-20 md:mt-44 text-center md:text-left">
            {title}
          </div>
          <div className="font-sans md:ml-4 mb-2 md:mb-4 md:text-xs text-sm lg:text-base font-extralight text-[#c1c2d3] dark:text-neutral-300 mt-2">
            {description}
          </div>
        </div>
      </div>

      {id === 2 && <GridGlobe/>}
      <div className="transition duration-300 transform group-hover:translate-x-1 mt-40">
      
      {id === 3 && (
  <>
    {/* Title at the top and centered */}
    <h1 className="text-center font-bold text-lg sm:text-xl mb-2 sm:mb-4"> {/* Adjust font size for mobile */}
      My Tech Stack
    </h1>

    {/* Tech Stack - Right Side */}
    <div className="flex gap-1 sm:gap-3 lg:gap-5 w-fit absolute bottom-5 sm:bottom-10 lg:bottom-[30px] -right-1 sm:right-4 lg:right-1">
      <div className="flex flex-col gap-1 sm:gap-2 lg:gap-4">
        {["Tailwind", "Express.Js", "Node.Js"].map((item) => (
          <span
            key={item}
            className="py-1 sm:py-2 lg:py-3 px-1 sm:px-2 lg:px-3 text-xs sm:text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Tech Stack - Left Side */}
    <div className="flex gap-1 sm:gap-3 lg:gap-5 w-fit absolute bottom-5 sm:bottom-10 lg:bottom-[30px] -left-2 sm:left-4 lg:left-1">
      <div className="flex flex-col gap-1 sm:gap-2 lg:gap-4">
        {["React.js", "MongoDb", "JavaScript"].map((item) => (
          <span
            key={item}
            className="py-1 sm:py-2 lg:py-3 px-1 sm:px-2 lg:px-3 text-xs sm:text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </>
)}

{id === 6 && (
  <div className=" relative">
    <MagicButton 
     title={copied? "Email copied" : "Copy me email"}
     icon= {<IoCopyOutline/>}
     position="right"
     otherClasses="!bg-[#161a31]"
     handleClick= {handleCopy}
     />
  </div>
)}

      </div>
    </div>
  );
};
