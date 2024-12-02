import { useEffect, useState } from "react"
 

export const SetTypingEffect = () => {

    const data = [
         
        "A developer skilled in JavaScript, React, and full-stack development 💻.",
        "I build responsive web applications and teach students through college sessions 📚.",
        "Let’s connect and create something amazing! 🚀"
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
                }, 1)
                return () => clearTimeout(timeout);
            } else {

                const lineTimeOut = setTimeout(() => {
                    setDisplayText((prev) => prev + "\n");
                    setLineIndex((prev) => prev + 1);
                    setCharIndex(0);
                }, 2)
            }
        }
    }, [charIndex, lineIndex, data]);


    return (
        <>
            <div className="w-1/2 mt-20 text-white ml-10 "  >
            <h2>hello world , it's mee </h2>
            <h1 className="font-extrabold "> Harsh Patle</h1>

                <h1>{displayText}</h1>
            </div>

          
        </>
    )
}