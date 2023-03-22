import React from "react";
import profile from "../assets/Profile.jpeg"
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div style={{ width: "60vw" }} className="flex gap-2">
          <p className="text-xl mt-20">
            My name is Sukhvindra Singh. I am from Uttar Pradesh. <br></br>
            Currenty, I am pursuing BCA(Bechalor of Computer application) And I
            am a MERN Stack Developer/Java Developer/Mendix Rapid Developer. My
            hobbies are Watching and playing cricket ,Learn new skills,
            Reading books.
          </p>
          <img src={profile} alt="profile" style={{borderRadius:"20px"}}/>
        </div>

        <br />
      </div>
    </div>
  );
};

export default About;
