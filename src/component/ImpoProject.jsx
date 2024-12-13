import project from './project.json';

export const ImpoProjects = () => {
  return (
    <>
      <ul className="w-96 h-1/2">
        <li>
        {project.map((curElem, key) => (
          <div key={key} >
            <img src={curElem.image} alt={curElem.heading} className='mt-5' />
            <div className='bg-black'>
            <h1 className="text-center font-parkinsans mt-4 p-3" >{curElem.heading}</h1>
            <p className="text-justify p-2 m-2 ">{curElem.description}</p>
            <ul className='grid grid-cols-3 mr-8 ml-8 gap-2 mb-4'>
              {curElem.skills.map((skill, index) => (
                <li key={index} className='bg-orange-500 text-center'>{skill}</li>
              ))}
            </ul>
            <p>
              <a href={curElem.visitLink} target="_blank" rel="noopener noreferrer" className='ml-3 mp-5'>
                Visit Project
              </a>
            </p>
          </div>
          </div>
        ))}
        </li>
      </ul>
    </>
  );
};
