import Formacao from "@/components/formacao";
import HardSkills from "@/components/hard-skills";
import Header from "@/components/header";
import Inicial from "@/components/inicial";
import Projects from "@/components/projects";
import SobreMim from "@/components/sobre-mim";


export default function Home() {
  return (
    <main className="min-h-screen min-w-screen py-5 px-5 md:px-20">
      <Header />
      <Inicial />
      <SobreMim />
      <HardSkills />
      <Projects />
      <Formacao />
    </main>
  );
}