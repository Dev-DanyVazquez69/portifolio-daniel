import Contacts from "@/components/contacts";
import Experience from "@/components/experience";
import HardSkills from "@/components/hard-skills";
import Header from "@/components/header";
import Inicial from "@/components/inicial";
import Projects from "@/components/projects";
import SobreMim from "@/components/sobre-mim";
import Training from "@/components/training";


export default function Home() {
  return (
    <main className="min-h-screen min-w-screen p-5 pb-0 md:px-20">
      <Header />
      <Inicial />
      <SobreMim />
      <HardSkills />
      <Projects />
      <Experience/>
      <Training />
      <Contacts />
    </main>
  );
}