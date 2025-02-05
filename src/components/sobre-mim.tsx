import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const SobreMim: React.FC = () => {
    return (
        <div id="sobre-mim" className="flex flex-col md:flex-row py-20 gap-5">
            <section className="flex flex-1 flex-col gap-5">
                <h2 className="font-black text-5xl">Sobre mim</h2>
                <p>Olá! Sou Daniel, formado em Sistemas de Informação e apaixonado por desenvolvimento web.</p>
                <p>Dentro do desenvolvimento web, trabalho com Next.js, TypeScript, Tailwind CSS, Styled Components, Prisma buscando sempre escrever código limpo, escalável e de qualidade.</p>
                <p>Além de programar, gosto de aprender sobre novas tecnologias, boas práticas de desenvolvimento e tendências do mercado.</p>
                <p>Atualmente, estou focado em aprimorar minhas habilidades em testes automatizados, PWA, cloud computing e contribuir para projetos inovadores.</p>
            </section>
            <section className="flex flex-1 justify-center items-center">
                <Avatar className="w-36 md:w-52 h-36 md:h-52">
                    <AvatarImage
                        src="https://github.com/Dev-DanyVazquez69.png"
                        alt="avatar"
                        className="" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </section>
        </div>
    );
}

export default SobreMim;