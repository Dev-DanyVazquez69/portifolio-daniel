import Image from "next/image";

const HardSkills = () => {
    return (
        <div id="HardSkills" className="flex flex-col h-1/2 py-20 gap-5 items-center">
            <h1 className="text-lg font-bold">Hard Skills</h1>
            <div className="flex flex-wrap gap-10 items-center justify-center w-2/3">
                <Image
                    alt="html"
                    src={"html.svg"}
                    width={50}
                    height={50} />
                <Image
                    alt="css"
                    src={"css.svg"}
                    width={50}
                    height={50} />
                <Image
                    alt="javascript"
                    src={"javascript.svg"}
                    width={50}
                    height={50} />
                <Image
                    alt="typescript"
                    src={"typescript.svg"}
                    width={50}
                    height={50} />
                <Image
                    alt="react"
                    src={"react.svg"}
                    width={50}
                    height={50} />
                <Image
                    alt="nextjs"
                    src={"nextjs.svg"}
                    width={50}
                    height={50} />
                <Image
                    alt="git"
                    src={"git.svg"}
                    width={50}
                    height={50} />
            </div>
        </div>
    );
}


export default HardSkills;