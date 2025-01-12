import React from 'react'
import { SetTypingEffect } from '../../component/TypingEffect'
import { Connection } from '../../component/Connection'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import Projects from './Projects'

const Home = () => {
  return (

    <>
      <div className="sm:flex flex-row-reverse">

        <div className="mt-6 ml-24 mb-11  sm:mt-16 w-1/2 sm:w-1/4  mr-40">
          <img src="harsh.JPG" alt="" className='rounded-full border-blue-300 border-4  drop-shadow-[0_0_80px_rgba(100,100,250,1)]' />
        </div>
        <SetTypingEffect />
      </div>

      <div className="">
        <a href="https://drive.google.com/file/d/17yBeZk_YH0Yq437o4NMrV6dJzjrvILwe/view?usp=sharing " target='_blank' rel="noopener noreferrer" className="">
          <button className=" w-40 mt-8 ml-5 sm:w-40 h-12 sm:ml-36 sm:mt-0 font-parkinsans bg-orange-700 
border-2 border-white rounded-3xl text-white drop-shadow-[0_0_10px_white] animate-up-down 
transition transform hover:translate-y-[-5px] hover:scale-100  
hover:drop-shadow-[0_0_10px_rgba(0,0,255,1)]  ">Get My RESUME</button></a>

        <button className="w-36 h-12 ml-9 mb-2 sm:ml-20 sm:mt-0 mb-5 font-parkinsans rounded-3xl border-4 border-white text-white font-bold  ">Lets Talk</button>

      </div>
      <div>
        <Connection />
      </div>
<hr className="text-yellow-400 drop-shadow-[0_0_20px_yellow]" />
      <section id='about'>
        <About />
      </section>

      <hr className="mt-6 text-yellow-500 drop-shadow-[0_0_20px_yellow]"/>

      <section id="projects">
        <Projects />
      </section>
      <section id='gallery'>
        <Gallery />
      </section>

      <section id='contact'>
        <Contact />
      </section>
    </>




  )
}

export default Home
