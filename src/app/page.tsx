import HardSkills from "@/components/hard-skills";
import Header from "@/components/header";
import Inicial from "@/components/inicial";
import Projects from "@/components/projects";
import SobreMim from "@/components/sobre-mim";


export default function Home() {
  return (
    <main className="min-h-screen min-w-screen py-5 px-5 md:px-10">
      <Header />
      <Inicial />
      <SobreMim />
      <HardSkills />
      <Projects />
    </main>
  );
}