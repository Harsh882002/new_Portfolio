import React from 'react'

const Contact = () => {
  return (
    <>
    
    {/* <h1 className='justify-center text-center mt-6  text-xsx font-permanentMarker'>Contact ME</h1> */}
   <section className=' mt-9  '>
    <div className="text-6xl text-center h-2/4 font-mono
     font-extrabold bg-[url('background/text-bg2.png')] bg-cover bg-clip-text text-transparent ">
    Your VISON, <br /> my EXPERTIES, <br /> and COFEE☕
     </div>

    <div  className=''>
      <h1 className='justify-center text-center mt-20 text-xl font-extrabold '>I'M ALWAYS INTERESTED ABOUT</h1>
    
 <ul className="mt-4 grid grid-cols-2  mr-3 text-center ml-4 gap-5 list-none p-0 mb-14">
  <li className="rounded-full border border-orange-500 p-2 ]">FrontEnd Development</li>
  <li className="rounded-full border border-orange-500 p-2">Backend Development</li>
  <li className="rounded-full border border-orange-500 p-2">React</li>
  <li className="rounded-full border border-orange-500 p-2">New Opportunities</li>
  <li className="rounded-full border border-orange-500 p-2">Coffee</li>
  <li className="rounded-full border border-orange-500 p-2">Space</li>
</ul>

    
    </div>
   </section>
    </>
  )
}

export default Contact
