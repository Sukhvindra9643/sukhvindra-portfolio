import React from "react";
import profile from "../assets/about.jpg"
const About = () => {
  let width = window.innerWidth;
  return (
    <div
      name="about"
      style={width <= 600?{height:"120vh"}:{}}
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex gap-2" style={width <= 600? { width: "100%",flexDirection:"column" }:{ width: "100%",flexDirection:"row" }}>
          <img src={profile} alt="profile" style={width <= 600?{width:"100%",height:"70%",borderRadius:"20px"}:{width:"100%",borderRadius:"20px"}}/>
          <p className="text-xl pe-2 text-justify">
            My name is Sukhvindra Singh. I am from Uttar Pradesh.
            Currenty, I am pursuing BCA(Bechalor of Computer application) And I
            am a MERN Stack Developer/Java Developer/Mendix Rapid Developer. My
            hobbies are Watching and playing cricket, Learn new skills,
            Reading books.
          </p>
        </div>

        <br />
      </div>
    </div>
  );
};

export default About;
// 
//  