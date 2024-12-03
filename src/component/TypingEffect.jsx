import { useEffect, useState } from "react"


export const SetTypingEffect = () => {

    const data = [
 
"😎 I'm passionate about turning ideas into digital experiences. As a web architect, I design sleek interfaces and build powerful solutions to bring your vision to life. Every keystroke crafts intuitive, scalable creations. Ready to turn your digital dreams into reality? Let’s create something extraordinary together!"
    ];
    const [displayText, setDisplayText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex < data.length) {
            if (charIndex < data[lineIndex].length) {
                const timeout = setTimeout(() => {
                    setDisplayText((prev) => prev + data[lineIndex][charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, 10)
                return () => clearTimeout(timeout);
            } else {

                const lineTimeOut = setTimeout(() => {
                    setDisplayText((prev) => prev + "\n");
                    setLineIndex((prev) => prev + 1);
                    setCharIndex(0);
                }, 100);
                return () => clearTimeout(lineTimeOut);
            }
        }
    }, [charIndex, lineIndex, data]);


    return (
        <>
            <div className="text-white mt-5 ml-3 sm:w-1/2 mt-20 sm:text-white ml-10 sm:mt-10 "  >
                <h2 className="text-xs font-mono text-xxs mb-5 ">hello world , it's mee </h2>
                <h1 className=" font-permanentMarker ml-4 text-xxl sm:font-extrabold sm:text-white   sm:ml-28"> Harsh Patle</h1>
                <h2 className="text-xxs text-orange-500 mt-4 font-orbit">Building bridges between front-end and back-end, one line of code at a time, since 2021</h2>


                <br />
                <pre className="text-xx font-parkinsans whitespace-pre-line  sm:text-xxs mr-6"  >{displayText}</pre>
            </div>


        </>
    )
}