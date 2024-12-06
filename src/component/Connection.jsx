import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const Connection =() =>{

    return(
        <>
         <ul className='flex mt-3 mb-5 ml-7 text-white gap-8 text-3xl sm:ml-24 sm:gap-16 ' >
                    <li>
                        <a href="https://github.com/Harsh882002" target="_blank">
                            <button><FaGithub /></button>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/harsh-patle-0ab840222/" target="_blank">
                            <button><FaLinkedin /></button>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/itss_harsh02/" target="_blank">
                            <button> <CiInstagram /> </button>
                        </a>
                    </li>

                    <li>
                        <a href="" target="_blank">
                            <button> <BsTwitterX /> </button>
                        </a>
                    </li>

                    <li>
                        <a href="mailto:harshpatle491@gmail.com?subject=Hello&body=I would like to connect."   >
                            <button> <SiGmail /> </button>
                        </a>
                    </li>

                </ul>
        </>
    )
}