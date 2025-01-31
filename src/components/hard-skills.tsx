import Image from "next/image";

const HardSkills = () => {

    const icons: string[] = [
        "html.svg",
        "css.svg",
        "javascript.svg",
        "typescript.svg",
        "react.svg",
        "nextjs.svg",
        "git.svg",
    ]

    return (
        <div id="HardSkills" className="flex flex-col h-1/2 py-20 gap-5 items-center">
            <h2 className="text-lg font-bold">Hard Skills</h2>
            <div className="flex flex-wrap gap-10 items-center justify-center w-2/3">
                {icons.map((icon, index) => (
                    <Image
                        key={index}
                        alt={icon}
                        src={icon}
                        width={50}
                        height={50} />
                ))}
            </div>
        </div>
    );
}


export default HardSkills;