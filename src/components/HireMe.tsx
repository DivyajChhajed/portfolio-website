import React from "react";
import Image from "next/image";
import circle from "../../public/images/svgs/CircularText.svg";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative ">
        <Image src={circle} alt="HireMe" className="fill-black animate-spin" />
        <Link
          href="mailto:divyajchhajeddc16102004@gmail.com"
          className="flex items-center justify-center font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full shadow-md border border-solid border-black w-20 h-20"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
