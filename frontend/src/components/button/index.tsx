type ButtonPropsTypes = {
  labelName: string;
  type?: "submit" | "reset" | "button";
  funClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ labelName, type, funClick }: ButtonPropsTypes) {
  return (
    <button
      type={type}
      onClick={funClick}
      className={`
        bg-green-600 
        text-white
        w-52
        px-8 
        py-2 
        rounded-lg 
        hover:bg-opacity-90 
        active:bg-green-700 
        active:scale-95 
        transition 
        duration-150 
        ease-in-out

        sm:w-auto
      `}
    >
      
      <p className={`text-xs sm:text-sm`}>{labelName}</p>
      
    </button>
  );
}
