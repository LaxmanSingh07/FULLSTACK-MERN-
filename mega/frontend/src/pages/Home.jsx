import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlighText from "../components/core/home/HighlightText";
import CTAButton from "../components/core/home/Button";
import videoUrl from "../assets/Images/banner.mp4";
import CodeBlock from "../components/core/home/CodeBlock";
import TimelineSection from "../components/core/home/TimelineSection";
import LearningLanguageSection from "../components/core/home/LearningLanguageSection";
import Footer from "../components/common/Footer";
import InstructorSection from "../components/core/home/InstructorSection.js";
import ExploreMore from "../components/core/home/ExploreMore.js";
function Home() {
  return (
    <div>
      {/* section -1 */}
      <div className="group relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className="mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future with
          <HighlighText text={"coding skills"} />.
        </div>
        <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects,puizzes, and personalinzed feedback from
          instructors.
        </div>
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="mx-3 my-12 shadow-blue-200">
          <video muted loop autoPlay>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
        {/* code section -1 */}
        <div>
          <CodeBlock
            pos={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlighText text={"Coding potential"} />
                with our online courses
              </div>
            }
            subheading={
              "Our Courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you. "
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            code={`import 'package:flutter/material.dart';
            class CustomCard extends StatelessWidget { 
               CustomCard({@required this.index});
              final index;
              @override 
              Widget build(BuildContext context) {  
                return Card(   
                child: Column(      
                children: <Widget>[Text('Card $index')],    
                  )   
                ); 
              }
          }`}
            bgGradient={"from-[#F9A826] to-[#F86D1F]"}
            codeColor={"text-yellow-25"}
          />
        </div>
        <div>
          <CodeBlock
            pos={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlighText text={"coding potential"} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            code={`<!DOCTYPE html>
<html>
<head>
  <style>
    /* Add your styles here */
  </style>
</head>
<body>
  <div class="flex position my-20 justify-between gap-10">
    <div class="w-[50%] flex flex-col gap-8">
      <h1>Heading Text</h1>
      <div class="text-richblack-300 font-bold">Subheading Text</div>
      <div class="flex gap-7 mt-7">
  </div>
</body>
</html>
`}
            codeColor={"text-yellow-25"}
          />
        </div>
        <ExploreMore/>
      </div>

      {/* section-2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[333px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex flex-row gap-5 mb-10 mt-[95px]">
            <div className="text-4xl font-semibold w-[45%]">
              GET the skills you need for a
              <HighlighText text={"Job that is in demand"} />
            </div>
            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitve specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
          <TimelineSection />

          <LearningLanguageSection />
        </div>

        {/* {section -3} */}

            <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 first-letter bg-richblue-900 text-white">
            <InstructorSection />
            <h2 className="text-center text-4xl font-semibold mt-10">
              Review from other Learners
            </h2>
            </div>


      </div>
      <Footer />
    </div>
  );
}

export default Home;
