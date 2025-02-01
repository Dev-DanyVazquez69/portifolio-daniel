import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Inicial = () => {

    const links: {
        name: string,
        href: string,
        src: string
    }[] = [
            {
                name: "github",
                href: "https://github.com/Dev-DanyVazquez69",
                src: "github.svg"
            },
            {
                name: "whatsapp",
                href: "https://api.whatsapp.com/send/?phone=55985617643&text=Ol%C3%A1%2C+gostaria+de+conversar+sobre+uma+proposta+de+trabalho&type=phone_number&app_absent=0",
                src: "whatsapp.svg"
            },
            {
                name: "linkedin",
                href: "https://www.linkedin.com/in/daniel-dos-santos-pessoa/",
                src: "linkedin.svg"
            },
            {
                name: "google",
                href: "#",
                src: "google.svg"
            }
        ]

    const styledLink = "dark:bg-background bg-foreground rounded-sm p-2";

    return (
        <div id="inicial" className="flex flex-col h-1/2 py-20 gap-5">
            <h1 className="font-black text-7xl">Daniel dos Santos</h1>
            <p className="text-lg">Desenvolvedor Frontend, apaixonado por transformar ideias em realidade</p>
            <div className="relative flex w-full gap-5 my-5">
                {links.map((link, index) => (
                    <a key={index} className={styledLink} href={link.href} target="_blank">
                        <Image
                            src={link.src}
                            alt={link.name}
                            width={25}
                            height={25} />
                    </a>
                ))}
            </div>
            <Link
                className="flex gap-2 p-4 bg-foreground text-background font-bold rounded-sm w-fit hover:opacity-75 justify-center items-center animate-bounce"
                href={"#"}>
                    <p>Curriculo</p>
                    <Download/>
                </Link>
        </div>
    );
}


export default Inicial;