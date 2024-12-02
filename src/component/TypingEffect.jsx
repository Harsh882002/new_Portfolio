import { useEffect, useState } from "react"
 

export const SetTypingEffect = () => {

    const data = [
        "A developer skilled in JavaScript, React, and full-stack development 💻.",
        "I build responsive web applications and teach students through college sessions 📚.",
        "Let’s connect and create something amazing! 🚀",
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
                }, 100)
                return () => clearTimeout(timeout);
            } else {

                const lineTimeOut = setTimeout(() => {
                    setDisplayText((prev) => prev + "\n"); 
                    setLineIndex((prev) => prev + 1);
                    setCharIndex(0);
                }, 1000);
                return () => clearTimeout(lineTimeOut);
            }
        }
    }, [charIndex, lineIndex, data]);


    return (
        <>
            <div className="text-white mt-5 ml-3 sm:w-1/2 mt-20 sm:text-white ml-10 sm:mt-20 "  >
            <h2 className="text-xs font-mono ">hello world , it's mee </h2> 
            <h1 className=" font-permanentMarker ml-4 text-xxl sm:font-extrabold sm:text-white text-xxl sm:ml-28"> Harsh Patle</h1>
             
<br />
                <pre className="text-xxs font-parkinsans whitespace-pre-line sm:text-l">{displayText}</pre>
            </div>

          
        </>
    )
}