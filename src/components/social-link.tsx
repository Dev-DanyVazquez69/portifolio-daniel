import Image from "next/image";

const SocialLink: React.FC = () => {

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
                href: "https://api.whatsapp.com/send/?phone=5598985617643&text=Ol%C3%A1%2C+gostaria+de+conversar+sobre+uma+proposta+de+trabalho&type=phone_number&app_absent=0",
                src: "whatsapp.svg"
            },
            {
                name: "linkedin",
                href: "https://www.linkedin.com/in/daniel-dos-santos-pessoa/",
                src: "linkedin.svg"
            },
            {
                name: "internet",
                href: "https://www.canva.com/design/DAFdi55oJIY/NVrPb1ywxzzF6auidzsdnw/edit",
                src: "internet.svg"
            }
        ]

    const styledLink = "dark:bg-background bg-foreground rounded-sm p-2";

    return (
        <>
            {
                links.map((link, index) => (
                    <a key={index} className={styledLink} href={link.href} target="_blank">
                        <Image
                            src={link.src}
                            alt={link.name}
                            width={25}
                            height={25} />
                    </a>
                ))
            }
        </>
    )
};

export default SocialLink;