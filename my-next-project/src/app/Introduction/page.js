"use client";
import React, { useState, useEffect } from "react";
//import {motion} from "framer-motion";
import {TabComponents } from "./TabComponents";


export default function Intro() {
  return (
    <>
        <div className="flex w-full gap-3 justify-evenly">
        <div className=" content-center  ">
            <div className="intro-content">
            <div className="punchline">
                <div className=" font-bold name">
                <h1 className="text-2xl">Hi I'm Angel Ashley Kisaakye</h1>
                </div>
                <div className="career">
                <h2 className="text-3xl">Front-end Developer</h2>
                </div>
                <div className="mt-4 mb-4 w-120">
                    <p className="text-justify">I’m a passionate Software Developer with skills in Java, SQL, Python, C, and C#. Skilled in designing 
    and developing user-friendly automation programs to enhance efficiency and streamline processes. 
 Enthusiastic, committed to continuous learning and innovation in 
    software development.</p>
                </div>
                
            </div>
            
            <div className=" flex  align-center gap-30 socials">
                <div className="flex justify-center  w-30 h-12 text-center download_btn">
                    <a href="#">Download CV</a>
                </div>
                <div className="flex gap-3">
                    <img className="w-7 h-7"src="/images/github.png" alt="github"></img>
                    <img className="w-7 h-7" src="/images/gmail.png" alt="gmail"></img>
                    <img className="w-7 h-7" src="/images/whatsapp.png" alt="whatsapp"></img>
                </div>
            </div>
                
            </div>
        </div>
        <div className="">
            <div className="float-left picture ">
                <div className="profile-blob"></div> 
            </div>
        </div>   
        </div>
        <TechStack/>
    </>
    
  
  );
}

function TechStack() {
    const [activeTab, setActiveTab] = useState(0);
    const tabRefs = TabComponents.map(() => React.createRef());

    useEffect(() => {
        if (tabRefs[activeTab] && tabRefs[activeTab].current) {
            tabRefs[activeTab].current.focus();
        }
    }, [activeTab]);

    return (
        <div className="w-full aboutMe">
            <div className="max-w-7xl  mx-auto sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12 ">
                <div className="mt-3">
                    <h2 className="text-3xl text-center">Technologies and Tools</h2>
                    <p className="text-center">Using these technologies, I was able to build user-focused web-apps</p>
                     <div className="mt-6 flex flex-col items-center">
                            <div className="flex justify-center p-2 gap-2 rounded-xl bg-purple-900 techStack">
                                {TabComponents.map((tech, index) => (
                                    <button
                                                key={index}
                                                ref={tabRefs[index]}
                                                className={`outline-none rounded-xl text-purple-200 px-3 py-1 min-w-[90px] text-sm transition-colors duration-200 ${
                                                    activeTab === index
                                                        ? 'bg-purple-300 text-purple-900 font-bold border-2 border-white'
                                                        : 'hover:bg-purple-300 focus:hover:bg-purple-300'
                                                }`}
                                                onClick={() => setActiveTab(index)}
                                            >
                                                {tech.title}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-4 w-300 bg-purple-500/10 p-4 rounded-lg">
                                {TabComponents[activeTab].content()}
                            </div>
                    </div>
                               
                </div>
            </div>
        </div>
    );
}