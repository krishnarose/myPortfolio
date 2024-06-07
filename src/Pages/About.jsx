// src/Home.js
import React, { useState } from "react";

const ProgressBar = ({ skill, percentage }) => (
  <div className="mb-4">
    <h2 className="text-lg font-bold mb-2">{skill}</h2>
    <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const About = () => {
  const [activeTab, setActiveTab] = useState("Skill");

  const renderContent = () => {
    switch (activeTab) {
      case "Skill":
        return (
          <div>
            <ProgressBar skill="React" percentage={75} />
            <ProgressBar skill="JavaScript" percentage={70} />
            <ProgressBar skill="NodeJs" percentage={70} />
            <ProgressBar skill="TailwindCSS" percentage={80} />
            <ProgressBar skill="DataBase" percentage={70} />
          </div>
        );
      case "Education":
        return (
          <div>
            <div>
              <h1 className="text-xl font-semibold">Master of Computer Appliction (80%)</h1>
              <p>Marwari College Ranchi</p>
              <p>2024-(Final Year), Ranchi Jharkhand</p>
            </div>
            <div className="py-4">
              <h1 className="text-xl font-semibold">B.Sc.(H) Computer Application (78%)</h1>
              <p>Dr. Shyama Prasad Mukherjee Univercity  Ranchi</p>
              <p>2019-2022, Ranchi Jharkhand</p>
            </div>
            <div className="py-3">
              <h1 className="text-xl font-semibold">Higher Secondary In Science (58.8%)</h1>
              <p>Ram Tahal Choudhary High School (CBSE)</p>
              <p>2019,Ranchi, Jharkhand</p>
            </div>
            <div className="py-2">
              <h1 className="text-xl font-semibold">Matriculation(9 CGPA)</h1>
              <p>Ram Tahal Choudhary High School (CBSE)</p>
              <p>2017,Ranchi, Jharkhand</p>
            </div>
          </div>
        );
      // case "Language":
      //   return <div>Details about Internship...</div>;
      case "Certificates":
        return <div>
         <p> Networking Basics <span className="font-bold">(CISCO)</span></p>
         <p className="py-2"> Java Programming <span className="font-bold">(Udemy)</span></p>

        </div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        name="About"
        className="min-h-screen bg-white flex flex-col items-center mt-10 px-4"
      >
        <div className="flex flex-wrap justify-center gap-5 mb-8">
          {["Skill", "Education",  "Certificates"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 rounded-xl font-semibold tracking-wider ${
                activeTab === tab
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-green-400 text-white hover:bg-green-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-4 border border-gray-300 rounded-lg bg-gray-100 min-h-[200px]">
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default About;
