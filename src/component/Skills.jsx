import skill from './skills.json';
 

export const Skills = () => {
    return (
        <>
            {
                Object.entries(skill.skills).map(([category, skills]) => (
                    <div key={category} >
                        <h1 className="mt-5 mb-5 ml-3  text-orange-400 font-roboto text-xxs ">{category}</h1>
                        <div className="grid grid-cols-3 ml-9 mr-9 sm:flex  gap-9">
                            {   
                                skills.map(skill => (
                                     <div key={skill.name}>
                                        <img src={skill.image} alt="" className="h-16 w-16 sm:w-24 object-contain drop-shadow-[0_0_9px_white] " />
                                        <h2 className="ml-5 mt-3">{skill.name}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            

            <div>
                <h1 className="mt-7 ml-4 text-orange-500 font-roboto text-xxs ">💁Soft Skills</h1>
                <ul className="text-white font-orbit text-s grid grid-cols-2 gap-3 justify-center text-center mt-3">
                    <li>Communication</li>
                    <li>Mentoring</li>
                    <li>Collaboration</li>
                    <li>Leadership</li>
                    <li>Problem Solving</li>
                    <li>Time Management</li>
                    <li>Decision Making</li>
                    <li>Critical Thinking</li>
                    <li>Adaptability in Agile  Environments</li>
                </ul>
            </div>
        </>
    );
};
