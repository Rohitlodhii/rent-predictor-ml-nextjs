import React from "react";

type Props = {
  children: React.ReactNode;
};

const NavContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="
        relative h-10 md:h-14  p-8
        flex items-center justify-between
        bg-white dark:bg-[#262626]
        border-2 border-black
        rounded-md overflow-hidden
        shadow-[4px_4px_0_0_black]
      "
    >
      {children}
    
    </div>
  );
};

export default NavContainer;