import React from 'react'

const Contact = () => {
  return (
    <>
    
    {/* <h1 className='justify-center text-center mt-6  text-xsx font-permanentMarker'>Contact ME</h1> */}
   <section className=' mt-9 sm:flex  '>
    <div className="sm:w-1/2 sm:text-9xl text-6xl text-center h-2/4 font-mono
     font-extrabold  text-white sm:mt-4 ">
    Your VISON, <br /> my EXPERTIES, <br /> and COFEE☕
     </div>

    <div  className=''>
      <h1 className='justify-center text-center mt-20 text-xl font-permanentMarker  '>I'M ALWAYS INTERESTED ABOUT</h1>
    
 <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3  mr-3 text-center ml-4 gap-6 list-none p-0 mb-14 sm:ml-14">
  <li >
    <button className="rounded-full border border-orange-500 p-2 drop-shadow-[0_0_10px_whitee] ">FrontEnd Development</button>
    </li>
  <li className="rounded-full border border-orange-500 p-2">
    <button>Backend Development</button>
    </li>
  <li className="rounded-full border border-orange-500 p-2">
    <button>React</button>
    
    </li>
  <li className="rounded-full border border-orange-500 p-2">
    <button>New Opportunities</button>
    </li>
  <li className="rounded-full border border-orange-500 p-2">
    <button>Coffee</button>
    </li>
  <li className="rounded-full border border-orange-500 p-2">
    <button>Space</button>
    </li>
</ul>
<hr />
<h1 className='mt-4 text-center text-lg font-extrabold mb-4 '>MINDING A PROJECT? <span className='ml-4 font-light  font-orbit text-orange-500'> cOnTact me</span></h1> 
<hr />
<ul className='grid grid-cols-2  text-center gap-5 mt-5 font-semibold text-lg font-roboto '>
  <li><a href="https://github.com/Harsh882002" target='_blank'>GITHUB</a></li>
  <li><a href="    https://www.linkedin.com/in/harsh-patle-0ab840222/" target='_blank'>LINKEDIN</a></li>
  <li><a href="">X[ TWITTER ]</a></li>
  <li><a href="    https://www.instagram.com/itss_harsh02/" target='_blank'>INSTAGRAM</a></li>
   
</ul>
    
    </div>
   </section>
    </>
  )
}

export default Contact
