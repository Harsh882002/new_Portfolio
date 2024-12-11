import project from './project.json';

export const ImpoProjects = () => {
  return (
    <>
      <ul>
        <li>
        {project.map((curElem, key) => (
          <div key={key} className="w-full h-1/2 bg-red-600 mt-9 mr-4">
            <img src={curElem.image} alt={curElem.heading} />
            <h1 className="text-center">{curElem.heading}</h1>
            <p className="text-justify p-3">{curElem.description}</p>
            <ul>
              {curElem.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <p>
              <a href={curElem.visitLink} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </p>
          </div>
        ))}
        </li>
      </ul>
    </>
  );
};
