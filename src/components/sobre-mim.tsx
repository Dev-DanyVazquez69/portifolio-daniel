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
                <p>Meu nome é Daniel e sou desenvolvedor front-end.</p>
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