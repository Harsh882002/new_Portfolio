import React from 'react'
import { SetTypingEffect } from '../../component/TypingEffect'
import { Connection } from '../../component/Connection'

const Home = () => {
  return (
    
    <>
<div className= "z sm:flex flex-row-reverse">
  


<div className="mt-6 ml-14  sm:mt-16 w-1/2 sm:w-1/4  sm:float-right mr-40">
<img src="harsh.JPG" alt="" className='rounded-full border-blue-300 border-4  drop-shadow-[0_0_80px_rgba(100,100,250,1)]'/>
</div>
<SetTypingEffect className="" />
</div>
                                                                {/* drop-shadow-[0_0_100px_rgba(100,100,250,1)] */}
<div>
<button className=" w-40 mt-8 ml-2 sm:w-40 h-12 sm:ml-52 mt-0  font-parkinsans bg-orange-700 
border-2 border-white rounded-3xl text-white drop-shadow-[0_0_10px_white] animate-up-down 
transition transform hover:translate-y-[-5px] hover:scale-100  
hover:drop-shadow-[0_0_10px_rgba(0,0,255,1)] ">Get My RESUME</button>

<button className="w-36 h-12 ml-9 mb-5 sm:ml-28 mt-0 font-parkinsans rounded-3xl border-4 border-white text-white font-bold  ">Lets Talk</button>

</div>
 
     
    </>
    

      
    
  )
}

export default Home
