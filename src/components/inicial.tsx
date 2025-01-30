import Image from "next/image";
import Link from "next/link";

const Inicial = () => {

    const styledLink = "dark:bg-background bg-foreground rounded-sm p-2";

    return (
        <div id="inicial" className="flex flex-col h-1/2 py-20 gap-5">
            <h1 className="text-4xl font-black">Daniel dos Santos</h1>
            <p className="text-lg">Desenvolvedor Frontend, apaixonado por transformar ideias em realidade</p>
            <div className="relative flex w-full gap-5 my-5">
                <Link className={styledLink} href={"#"}>
                    <Image
                        src={"github.svg"}
                        alt="github"
                        width={25}
                        height={25} />
                </Link>
                <Link className={styledLink} href={"#"}>
                    <Image
                        src={"whatsapp.svg"}
                        alt="whatsapp"
                        width={25}
                        height={25} />
                </Link>
                <Link className={styledLink} href={"#"} >
                    <Image
                        src={"linkedin.svg"}
                        alt="github"
                        width={25}
                        height={25} />
                </Link>
                <Link className={styledLink} href={"#"}>
                    <Image
                        src={"google.svg"}
                        alt="github"
                        width={25}
                        height={25} />
                </Link>
            </div>
            <Link className="p-4 bg-foreground text-background font-bold rounded-sm w-fit hover:opacity-75" href={"#"}>Baixar Curriculo</Link>
        </div>
    );
}


export default Inicial;