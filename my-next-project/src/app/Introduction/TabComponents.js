'use client'
import {react} from 'react';
import {motion} from "framer-motion";
import { title } from 'framer-motion/client';


export const technologies= [
    {
        image:`/images/CProgramming.png`,
        technology:"C Programming"
    },
    {
        image:`/images/CSS.png`,
        technology:"CSS"
    },
    {
        image: `/images/html.png`,
        technology:"HTML"
    },
    {
        image:`/images/js.png`,
        technology:"JavaScript"
    },
    {
        image:`/images/python.png`,
        technology:"Python"
    },
    {
        image:`/images/java.png`,
        technology:"Java"
    },
]


export const frameworks= [
    {
        image: ``,
        framework:""
    }
]
const ML= [
    {
        image:``,
        ML:""
    }

]
export const Concepts= [
    
]

export const fadeInVariants= (index) => ({
    initial :{
        opacity: 0,
        y:100
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration:0.07*index,
        }

    }
})

export const TabComponents = [
    {
        title: 'Languages',
        content: () => (
            <ul className="grid grid-cols-5 gap-4 mt-5 techStack">
                {technologies.map((technology, index) => (
                    <motion.li
                        variants={fadeInVariants(index)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: false,
                            amount: 0.1,
                        }}
                        className="h-12 p-1 bg-purple-950 rounded-xl flex"
                        key={index}
                    >
                        <div className="h-9 w-9">
                            <img src={technology.image} className="h-full w-full" alt="technology" />
                        </div>
                        <p className="p-2">{technology.technology}</p>
                    </motion.li>
                ))}
            </ul>
        ),
    },
    {
        title: 'Frameworks',
        content: () => (
            <ul className="grid grid-cols-5 gap-4 mt-5 techStack">
                {frameworks.map((framework, index) => (
                    <motion.li
                        variants={fadeInVariants(index)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: false,
                            amount: 0.1,
                        }}
                        className="h-12 p-1 bg-purple-950 rounded-xl flex"
                        key={index}
                    >
                        <div className="h-9 w-9">
                            <img src={framework.image} className="h-full w-full" alt="framework" />
                        </div>
                        <p className="p-2">{framework.framework}</p>
                    </motion.li>
                ))}
            </ul>
        ),
    },
    {
        title: 'ML',
        content: () => (
            <ul className="grid grid-cols-5 gap-4 mt-5 techStack">
                {ML.map((ml, index) => (
                    <motion.li
                        variants={fadeInVariants(index)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: false,
                            amount: 0.1,
                        }}
                        className="h-12 p-1 bg-purple-950 rounded-xl flex"
                        key={index}
                    >
                        <div className="h-9 w-9">
                            <img src={ml.image} className="h-full w-full" alt="ml" />
                        </div>
                        <p className="p-2">{ml.ML}</p>
                    </motion.li>
                ))}
            </ul>
        ),
    },
    {
        title: 'Concepts',
        content: () => (
            <ul className="grid grid-cols-5 gap-4 mt-5 techStack">
                {Concepts.map((concept, index) => (
                    <motion.li
                        variants={fadeInVariants(index)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: false,
                            amount: 0.1,
                        }}
                        className="h-12 p-1 bg-purple-950 rounded-xl flex"
                        key={index}
                    >
                        <div className="h-9 w-9">
                            <img src={concept.image} className="h-full w-full" alt="concept" />
                        </div>
                        <p className="p-2">{concept.Concepts}</p>
                    </motion.li>
                ))}
            </ul>
        ),
    },
];