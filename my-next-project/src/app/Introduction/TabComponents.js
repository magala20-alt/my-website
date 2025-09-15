import {react} from 'react';
import {motion} from "framer-motion";
import { title } from 'framer-motion/client';

const technologies= [
    {
        image:`/images/CProgramming.png`,
        technology:"C Programming"
    },
    {
        image:`/images/CSS.png`,
        technology:"CSS"
    },
]
const frameworks= [

]
const ML= [

]
const Concepts= [
    
]

const fadeInVariants= (index) => ({
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