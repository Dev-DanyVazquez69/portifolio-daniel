import SocialLink from "./social-link";

const Contacts: React.FC = () => {
    return (
        <footer id="contacts" className="flex flex-col border p-5 gap-10 rounded-tl-xl rounded-tr-xl">
            <section className="flex flex-col md:flex-row justify-around items-center">
                <div className="flex">
                    <strong>Email:</strong>
                    <span> danyv7818@gmail.com</span>
                </div>
                <div className="flex">
                    <strong>Telefone:</strong>
                    <span> (98) 98402-7818</span>
                </div>
            </section>
            <section className="flex justify-center items-center gap-5">
                <SocialLink />
            </section>
            <section className="flex flex-col md:flex-row justify-end items-end italic text-sm font-thin">
                <span>© Daniel dos Santos Pessoa 2025.</span>
                <span>Todos os direitos reservados.</span>
            </section>
        </footer>
    )
};

export default Contacts;