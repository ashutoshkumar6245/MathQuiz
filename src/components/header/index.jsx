import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className=" flex justify-between w-full  lg:px-16 lg:py-4 p-1  lg:h-[5.125rem] h-[2rem] bg-lime-800 text-white">
      <div className="lg:text-3xl text-sm lg:py-2 p-0">Math Quiz</div>
      <div className="flex justify-between lg:gap-10 lg:py-4  content-center">
        <div className="lg:text-2xl  text:">
          {userName ? userName : "Guest"}
        </div>
      </div>
    </div>
  );
};

export default Header;
