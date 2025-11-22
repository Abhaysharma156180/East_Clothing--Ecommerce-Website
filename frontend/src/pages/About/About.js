import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        Why?
                    </h1>
                <p>Working hard and staying focused is important. Sometimes people make mistakes, but that’s part of learning. It’s good to put effort into what you do and take responsibility for your actions. Everyone should try to do their best and avoid being lazy. Working with honesty and care brings good results. Taking breaks and enjoying small things also helps to stay balanced and happy.
                   Learning new skills can be difficult at first, but practice makes it easier. We should respect others, follow rules, and complete our tasks on time. Helping others and working together makes everything better. Even small efforts can create a big difference over time. Staying positive and patient helps us grow stronger and wiser every day.</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How?
                    </h1>
                <p>Hard work and dedication are important in everything we do. Sometimes we make mistakes, but those mistakes help us learn and improve. It is always good to stay focused and complete our work with honesty and sincerity. We should try to give our best effort and never avoid our responsibilities. Success comes when we work with discipline and determination.

Working with others, learning new things, and maintaining a positive attitude help us grow personally and professionally. Taking short breaks and enjoying small moments keeps our mind fresh and active. Every small effort we make today will lead to bigger achievements in the future.

Being responsible, respectful, and kind to others creates a healthy and productive environment. Patience, practice, and persistence are the keys to success. When we do our work with passion and honesty, it not only benefits us but also helps the people around us.</p>
                </div>
            </div>
        </>
    
    )
}

export default About
