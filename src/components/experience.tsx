"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const experiences = [
        {
            role: "Estagiário de TI",
            company: "Sefaz",
            period: "09/2021 - 05/2022",
            description: "Desenvolvimento e melhoria de página no MOODLE com html, css e plugins da plataforma"
        },
        {
            role: "Projeto - Desenvolvedor Front End",
            company: "Kanagawa",
            period: "07/2023 - 09/2023",
            description: "• Desenvolver telas mobile interativas e responsivas com react native"
        },
        {
            role: "Técnico de suporte a hardware",
            company: "Immunity Inteligence",
            period: "05/2022 - Até o momento",
            description: "Suporte técnico e abertura e administração de chamados via sistema MILVUS"
        }
    ];

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            containerRef.current.children,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.3, 
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", 
                    toggleActions: "restart none none none" 
                }
            }
        );
    }, []);

    return (
        <div id="experience" className="flex flex-col h-1/2 py-20 items-center gap-16">
            <h2 className="font-bold text-2xl">Experiência</h2>
            <div ref={containerRef} className="relative border-l-4 border-blue-500 pl-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="mb-8 relative">
                        <div className="absolute -left-8 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <Briefcase size={16} className="text-white" />
                        </div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="italic text-xs">{exp.company} - {exp.period}</p>
                        <p className="italic text-xs">{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
