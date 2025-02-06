import { ModeToggle } from "@/components/ui/mode-toggle";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
    const links: {
        name: string,
        href: string
    }[] = [
            {
                name: "Inicio",
                href: "#inicial"
            },
            {
                name: "Sobre mim",
                href: "#sobre-mim"
            },
            {
                name: "HardSkills",
                href: "#HardSkills"
            },
            {
                name: "Projetos",
                href: "#projects"
            },
            {
                name: "Experiência",
                href: "#experience"
            },
            {
                name: "Formação",
                href: "#training"
            },
            {
                name: "Contatos",
                href: "#contacts"
            }
        ]

    return (
        <header className="justify-between flex items-center md:w-10/12 p-4 border rounded-lg mx-auto my-10">
            <div className="hidden lg:flex gap-6">
                {links.map((link, index) => (
                    <Link className="scale-100 opacity-75 hover:scale-110 transform transition duration-300 ease-in-out hover:opacity-100" key={index} href={link.href}>{link.name}</Link>
                ))}
            </div>
            <ModeToggle />
            <div className="flex lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription>
                                <div className="flex flex-col gap-4 mt-5">
                                    {links.map((link, index) => (
                                        <SheetClose asChild key={index}>
                                            <Link href={link.href}>{link.name}</Link>
                                        </SheetClose>
                                    ))}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Header;