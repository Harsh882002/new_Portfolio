import { useState } from "react"
import { MdRestaurantMenu } from "react-icons/md";


export const Headers = () => {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <>
            <div className="sm:hidden flex justify-start ml-2 mt-2 ">
                <MdRestaurantMenu className="text-red-500 w-8 h-8 cursor-pointer " onClick={handleMenu} />
            </div>


            <ul className={`${
          menu ? "block" : "hidden "
        } pl-2  mt-2 font-mono sm:flex flex-col sm:flex-row gap-2 text-white justify-end`}>
                <li className="mr-3 mt-3">Home</li>
                <li className="mr-3 mt-3">About</li>
                <li className="mr-3 mt-3">Projects</li>
                <li className="mr-3 mt-3">Contact</li>
            </ul>


        </>




    )
}