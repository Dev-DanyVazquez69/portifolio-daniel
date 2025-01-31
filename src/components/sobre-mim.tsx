import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const SobreMim: React.FC = () => {
    return (
        <div id="sobre-mim" className="flex h-1/2 p-5">
            <section className="flex flex-1 flex-col justify-center">
                <h2 className="font-black text-lg">Sobre mim</h2>
                <p>Meu nome é Daniel e sou desenvolvedor front-end.</p>
            </section>
            <section className="flex flex-1 justify-center items-center">
                <Avatar className="w-24 md:w-40 h-24 md:h-40">
                    <AvatarImage 
                        src="https://github.com/shadcn.png"
                        alt="avatar" 
                        className=""/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </section>
        </div>
    );
}

export default SobreMim;