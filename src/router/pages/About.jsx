import React from "react";
import { Skills } from "../../component/Skills";

const About = () => {
  return (
    <>
      <section className=" sm:flex">
        <div className="mt-5 mb-4 ml-7  justify-center text-justify mr-7   sm:w-1/2 ">
          <h1 className="  sm:mt-4 text-3xl justify-center text-center font-permanentMarker text-xxl ">
            About Me
          </h1>
          <p className="mt-2 ">
            🚀 I'm <b className="text-yellow-400">Harsh Hemraj Patle,</b> a
            passionate Full Stack Developer at Zazpi Tech Pvt. Ltd., dedicated
            to building powerful and intuitive digital experiences. With a
            strong foundation in Information Technology, I specialize in
            crafting seamless, high-performance applications using HTML, CSS,
            JavaScript, ReactJS, ExpressJS, and SQL.{" "}
          </p>{" "}
          <p className="mt-2 ">
            <b className="text-yellow-400">💡 Beyond coding,</b> I thrive on
            mentorship and knowledge sharing. I actively conduct training
            sessions, empowering aspiring developers to master programming and
            web development. Teaching not only allows me to inspire others but
            also sharpens my own expertise, keeping me at the forefront of
            technological advancements.
          </p>{" "}
          <p className="mt-2 ">
            <b className="text-yellow-400">
              ⚡ Driven by innovation and problem-solving,
            </b>
            I transform complex challenges into elegant solutions. Whether it's
            architecting scalable systems, optimizing performance, or enhancing
            user experience, I am always eager to push the boundaries of what’s
            possible.
          </p>{" "}
          <br />
          <p className="mt-2 ">
            {" "}
            <b className="text-yellow-400">
              ✨ Let's collaborate, innovate, and build something extraordinary
              together!
            </b>
          </p>
        </div>

        {/* <div className="hiden sm:w-px block mt-8 mr-3 bg-yellow-400"></div> */}

        <div>
          <h1 className="  mt-3 justify-center text-center text-3xl font-permanentMarker text-xxl ">
            Skills
          </h1>
          <div className="h-96 overflow-y-auto">
            <Skills />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
