"use client"

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap"
import { useLayoutEffect } from "react";

const HardSkills = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<HTMLDivElement>(null);

    const icons: string[] = [
        "html.svg",
        "css.svg",
        "javascript.svg",
        "typescript.svg",
        "react.svg",
        "nextjs.svg",
        "git.svg",
        "zod.svg",
        "tailwindcss.svg",
        "auth.svg",
        "styled.svg",
        "prisma.svg",
    ]

    useLayoutEffect(() => {
        if (!iconsRef.current) return;

        gsap.fromTo(
            iconsRef.current.children,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );
    }, []);

    return (
        <div ref={containerRef} id="HardSkills" className="flex flex-col h-1/2 py-20 gap-16 items-center">
            <h2 className="font-bold text-2xl">Hard Skills</h2>
            <div ref={iconsRef} id="icons" className="flex flex-wrap gap-10 items-center justify-center w-2/3">
                {icons.map((icon, index) => (
                    <Image
                        key={index}
                        alt={icon}
                        src={icon}
                        width={50}
                        height={50}
                        className="animate-bounce" />
                ))}
            </div>
        </div>
    );
}


export default HardSkills;