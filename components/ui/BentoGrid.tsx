import { cn } from "../../lib/utils";

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
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto p-4", // Adjust grid and padding
        className
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
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  id: number;
}) => {
  return (
    <div
      className={cn(
        "relative group hover:shadow-lg transition duration-300 p-4 rounded-lg dark:bg-black bg-white border dark:border-white/[0.1] shadow-md", // Adjust shadows and padding
        className
      )}
      style={{
        backgroundColor: "#020024", // Gradient background
        backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
      }}
    >
      <div className="flex justify-center items-center h-40"> {/* Adjust height */}
        <div className="w-full h-full absolute top-0 left-0">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover h-full w-full rounded-md")} // Adjust image sizing
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}` }>
          {spareImg && (
            <img
            src={spareImg}
            alt={spareImg}
            className="object-cover h-full w-full rounded-md h-full"/>
          )}
        </div>
      </div>

      <div className="transition duration-300 transform group-hover:translate-x-1 mt-40">
        <div className="font-sans font-semibold text-neutral-800 dark:text-neutral-200 text-sm mb-1">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-500 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
