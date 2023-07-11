import React from "react";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-typewriting-effect";

function CodeBlock({
  pos,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  code,
  bgGradient,
  codeColor,
}) {
  return (
    <div className={`flex ${pos} my-20 justify-between gap-10 `}>
      {/* Section -1 */}
      <div className="w-[50%] flex flex-col gap-8">
        {heading}
        <div className="text-richblack-300 font-bold ">{subheading}</div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText};
          </CTAButton>
        </div>
      </div>
      {/* Section -2 */}
      <div>
        {/* {bg graident } */}
        <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
          {code.split("\n").map((line, index) => (
            <p key={index}>{index}</p>
          ))}
        </div>
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor}`}
        >
          <TypeAnimation
            sequence={[CodeBlock, 5000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "inline-block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
}

export default CodeBlock;
