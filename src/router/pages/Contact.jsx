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

    <div >
      <h1 className='justify-center text-center mt-20 text-xl font-extrabold '>I'M ALWAYS INTERESTED ABOUT</h1>
    
  <ul className='mt-4 grid grid-cols-2 ml-8 gap-5'>
    <li className='w-auto h-auto  border-4 text-center rounded  border-white '>Front Developmet</li>
    <li className='w-auto h-auto  border-4 text-center rounded  border-white'>React</li>
    <li className='w-auto h-auto  border-4 text-center rounded  border-white'>Backend Developmnet</li>
    <li className='w-auto h-auto  border-4 text-center rounded  border-white'>New Opportunities</li>
    <li className='w-auto h-auto  border-4 text-center rounded  border-white'>Coffee</li>
    <li className='w-auto h-auto  border-4 text-center rounded  border-white'>Space</li>
  </ul>
    
    </div>
   </section>
    </>
  )
}

export default Contact
