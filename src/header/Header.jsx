// Headers.js
import { useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";

export const Headers = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            <div className="sm:hidden flex justify-start ml-2 pt-2 ">
                <MdRestaurantMenu
                    className="text-red-500 w-8 h-8 cursor-pointer"
                    onClick={handleMenu}
                />
            </div>

            <ul
                className={`${
                    menu ? "block" : "hidden"
                } pl-2 font-mono text-xl h-14 sm:flex flex-col sm:flex-row gap-2 text-white justify-end`}
            >
                <li className="font-parkinsans mr-5 mt-4">
                    <a href="#home">Home</a>
                </li>
                <li className="font-parkinsan mr-5 mt-4">
                    <a href="#about">About</a>
                </li>
                <li className="font-parkinsans mr-5 mt-4">
                    <a href="#projects">Projects</a>
                </li>
                <li className="font-parkinsans mr-5 mt-4">
                    <a href="#gallery">Gallery</a>
                </li>
                <li className="font-parkinsans mr-20 mt-4">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </>
    );
};