import { Download } from "lucide-react";
import SocialLink from "./social-link";

const Inicial = () => {

    return (
        <div id="inicial" className="flex flex-col h-1/2 py-20 gap-5">
            <h1 className="font-black text-7xl">Daniel dos Santos</h1>
            <p className="text-lg">Desenvolvedor Frontend, apaixonado por transformar ideias em realidade</p>
            <div className="relative flex w-full gap-5 my-5">
                <SocialLink />
            </div>
            <a
                className="flex gap-2 p-4 bg-foreground text-background font-bold rounded-sm w-fit hover:opacity-75 justify-center items-center animate-bounce"
                target="_blank"
                href={"/curriculo.pdf"}>
                <p>Curriculo</p>
                <Download />
            </a>
        </div>
    );
}


export default Inicial;