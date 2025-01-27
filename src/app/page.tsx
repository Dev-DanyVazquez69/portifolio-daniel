import { ModeToggle } from "@/components/ui/mode-toggle";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen p-5">
      <header className="justify-between flex items-center md:w-3/4 p-4 border rounded-lg mx-auto">
        <div className="hidden md:flex gap-6">
          <Link href={"#"}>Inicio</Link>
          <Link href={"#"}>Sobre mim</Link>
          <Link href={"#"}>Projetos</Link>
          <Link href={"#"}>Formação</Link>
          <Link href={"#"}>Contatos</Link>
        </div>
        <ModeToggle />
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>

    </main>
  );
}
