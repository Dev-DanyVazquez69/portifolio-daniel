import { ModeToggle } from "@/components/ui/mode-toggle";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="justify-between flex items-center md:w-10/12 p-4 border rounded-lg mx-auto my-10">
            <div className="hidden lg:flex gap-6">
                <Link href={"#inicial"}>Inicio</Link>
                <Link href={"#sobre-mim"}>Sobre mim</Link>
                <Link href={"#HardSkills"}>HardSkills</Link>
                <Link href={"#"}>Projetos</Link>
                <Link href={"#"}>Formação</Link>
                <Link href={"#"}>Contatos</Link>
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
                                    <Link href={"#inicial"}>Inicio</Link>
                                    <Link href={"#sobre-mim"}>Sobre mim</Link>
                                    <Link href={"#HardSkills"}>HardSkills</Link>
                                    <Link href={"#"}>Projetos</Link>
                                    <Link href={"#"}>Formação</Link>
                                    <Link href={"#"}>Contatos</Link>
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