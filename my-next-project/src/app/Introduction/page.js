'use client'
import { useState, useEffect } from "react";
//import {motion} from "framer-motion";
import { technologies,frameworks,Concepts,TabComponents } from "./TabComponents";


export default function Intro() {
  return (
    <>
        <div className="flex w-full justify-evenly">
        <div className=" content-center  ">
            <div className="intro-content">
            <div className="punchline">
                <div className=" font-bold name">
                <h1 className="text-4xl">Hi I'm Angel Ashley Kisaakye</h1>
                </div>
                <div className="career">
                <h2 className="font-medium">Front-end Developer</h2>
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
        <AboutMe/>
    </>
    
  
  );
}

function AboutMe(){
    const [isVisible, setIsVisible]= useState(false);

    useEffect(()=>{
        const timer= setTimeout(()=>{
            setIsVisible(true);
        },100);
        return ()=>clearTimeout(timer);
    }, []);
    return (
        <div className="w-full aboutMe">
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12 ">
                <h1 className="text-4xl md:text-4xl font-bold md-4 text-center">About Me</h1>
                <div className="mt-12">
                    <p className="text-justify">I’m a passionate Software Developer with skills in Java, SQL, Python, C, and C#. Skilled in designing 
    and developing user-friendly automation programs to enhance efficiency and streamline processes. 
    Adept at problem-solving, writing clean and efficient code, and collaborating with teams to deliver 
    high-quality software solutions. Enthusiastic, committed to continuous learning and innovation in 
    software development.</p>
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl">Technologies and Tools</h2>
                    <p>Using these technologies, I was able to build user-focused web-apps</p>
                   <div className="mt-6  ">

                   </div>
                </div>
                
            </div>
        </div>
    );
}