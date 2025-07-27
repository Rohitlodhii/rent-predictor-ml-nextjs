import React from "react";

type Props = {
  children: React.ReactNode;
};

const GridBackground: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="
        relative md:p-8 px-1 py-8
        bg-white dark:bg-[#262626]
        border-2 dark:border-4 border-black
        rounded-md overflow-hidden
        shadow-[4px_4px_0_0_black]
        flex items-center justify-center
      "
    >
      {/* Grid lines using CSS gradients */}
      <div
        className="
          absolute inset-0 
          bg-[length:40px_40px] 
          bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]
        "
        aria-hidden="true"
      />
      <div className="relative z-10 py-10">{children}</div>
    </div>
  );
};

export default GridBackground;
