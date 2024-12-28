import project from './project.json';

export const ImpoProjects = () => {
  return (
    <>
    <div className='w-4/5'>
      <ul className="w-screen h-1/2     ">
        <li className='mr-5 ml-5  sm:grid grid-cols-2 gap-9 sm:mr-14 ml-14 mt-10 mb-14'>
        {project.map((curElem, key) => (
          <div key={key}  >
            <img src={curElem.image} alt={curElem.heading } className='mt-5'  />
            <div className='bg-black'>
            <h1 className="text-center font-parkinsans  mt-0 p-3 text-2xl text-orange-500 font-parkinsans" >{curElem.heading}</h1>
            <p className="text-justify p-2 m-2 ">{curElem.description}</p>
            <ul className='grid grid-cols-2 mr-8 ml-8 gap-3 mb-4'>
              {curElem.skills.map((skill, index) => (
                <li key={index} className='border-4 font-bold border-orange-500 text-center rounded w-30 mb-5 '>{skill}</li>
              ))}
            </ul>
            <p>
               
               
            </p>
          </div>
          </div>

        ))}
        </li>
      </ul>
      </div>
    </>
  );
};
