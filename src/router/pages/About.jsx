import React from 'react'
import { Skills } from '../../component/Skills'

const About = () => {
  return (
    <>

      <section className=" sm:flex">

        <div className="mt-5 mb-4 ml-7  justify-center text-justify mr-7   sm:w-1/2 ">
        <h1 className="  sm:mt-4 text-3xl justify-center text-center font-permanentMarker text-xxl ">About Me</h1>

          <p className="mt-2">I’m Harsh Hemraj Patle, a passionate software developer with a Bachelor’s degree in Information Technology. Currently, I’m interning at Zazpi Tech Pvt. Ltd., where I’m refining my skills and contributing to impactful projects.

          In addition to development, I have a strong passion for teaching. I regularly conduct training sessions for students, helping them build a solid foundation in programming and web development. This experience not only allows me to share knowledge but also deepens my own understanding of technology and communication.

          Specializing in full-stack development, I work with technologies like HTML, CSS, JavaScript, ReactJS, ExpressJS, and SQL to create seamless, user-friendly applications. Driven by problem-solving and a love for coding, I’m eager to collaborate on meaningful projects and bring ideas to life.

          Let’s create something extraordinary together!   </p> 
           </div>

        {/* <div className="hiden sm:w-px block mt-8 mr-3 bg-yellow-400"></div> */}

        <div>
        <h1 className="  mt-3 justify-center text-center text-3xl font-permanentMarker text-xxl ">Skills</h1>
           <div className="h-96 overflow-y-auto">
           <Skills />

           </div>

        </div>
      </section>

    </>
  )
}

export default About
