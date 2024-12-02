import { useState } from "react"
import { MdRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";


export const Headers = () => {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <>
            <div className="sm:hidden flex justify-start ml-2 pt-2 ">
                <MdRestaurantMenu className="text-red-500 w-8 h-8 cursor-pointer " onClick={handleMenu} />
            </div>


            <ul className={`${
          menu ? "block" : "hidden "
        } pl-2 font-mono text-sm sm:flex flex-col sm:flex-row gap-2 text-white justify-end`}>
                <li className="font-parkinsans mr-3 mt-3 "><NavLink to="/">Home</NavLink></li>
                <li className=" font-parkinsan mr-3 mt-3"><NavLink to="/about">About</NavLink></li>
                <li className="font-parkinsans mr-3 mt-3"><NavLink to="/projects">Projects</NavLink></li>
                <li className="font-parkinsans mr-3 mt-3"><NavLink to="gallery">Gallery</NavLink></li>
                <li className="font-parkinsans mr-3 mt-3"><NavLink to="contact">Contact</NavLink></li>
            </ul>


        </>




    )
}