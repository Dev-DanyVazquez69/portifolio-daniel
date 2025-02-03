import { Link } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image";

const Projects = () => {

  const projects: {
    title: string;
    description: string;
    link: string;
    background: string;
  }[] = [
      {
        title: "Invent-ti",
        description: "Aplicação para gerenciamento de inventário de TI",
        link: "https://github.com/Dev-DanyVazquez69/inven-ti",
        background: "/inventi.png",
      },
      {
        title: "Santos Pet",
        description: "Aplicação para gerenciamento informações sobre pets",
        link: "https://github.com/Dev-DanyVazquez69/santos-pets",
        background: "/santosPetz.png",
      },
    ]

  return (
    <div id="projects" className="flex flex-col h-1/2 py-20 items-center gap-16">
      <h2 className="font-bold text-2xl">Projetos</h2>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full items-end">
                  <CardHeader>
                    <CardTitle className="uppercase text-center">{project.title}</CardTitle>
                    <CardDescription className="text-center" title={project.description}>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative flex flex-col aspect-square items-center justify-center p-6 text-center">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <Link />
                      <Image 
                      alt="project-image" 
                      src={project.background}
                      fill/>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Projects;