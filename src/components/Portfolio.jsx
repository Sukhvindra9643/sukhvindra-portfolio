import React from "react";
import textUtils from "../assets/portfolio/textutils.png";
import registration from "../assets/portfolio/registration.png";
import swagmart from "../assets/portfolio/swagmart.png";
import ncetcse from "../assets/portfolio/ncetcse.png";
import apninews from "../assets/portfolio/apninews.png";
import meet from "../assets/portfolio/meet.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ncetcse,
      href:"http://ncetcse.com/",
      codeLink: "https://github.com/Sukhvindra9643/ncetcse"
    },
    {
      id: 2,
      src: swagmart,
      href:"https://www.swagmart.live",
      codeLink: "https://github.com/Sukhvindra9643/Swagmart"
    },
    {
      id: 3,
      src: textUtils,
      href:"https://sukhvindra9565.github.io/text-utils-app/",
      codeLink: "https://github.com/Sukhvindra9565/text-utils-app"
    },
    {
      id: 4,
      src: apninews,
      href:"https://apninews.onrender.com",
      codeLink: "https://github.com/Sukhvindra9643/apninews"
    },
    {
      id: 5,
      src: registration,
      href:"https://registration-72sy.onrender.com/",
      codeLink: "https://github.com/Sukhvindra9643/registeration"
    },
    {
      id: 6,
      src: meet,
      href:"https://meet-two-alpha.vercel.app/join.html",
      codeLink: "https://github.com/Sukhvindra9643/meet2.0"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href, codeLink}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-40"
              />
              
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={href}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={codeLink}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
