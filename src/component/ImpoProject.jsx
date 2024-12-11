import project from './project.json'

export const ImpoProjects = () =>{

    return(
        <>
        {
      project.map((curElem,key)  =>(
 
        <div>
            <div>
                <img src={curElem.image} alt="" />
            </div>
            <h1>{curElem.heading}</h1>
            <h1></h1>
        </div>
    ))
    }
        </>
    )
}