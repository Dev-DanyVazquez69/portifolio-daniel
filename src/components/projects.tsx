import { Link } from "lucide-react";
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Projects = () => {

  const projects: {
    title: string;
    description: string;
    link: string;
    background: string;
  }[] = [
      {
        title: "Projeto 1",
        description: "Descrição do projeto 1",
        link: "https://github.com",
        background: "bg-red-500",
      },
      {
        title: "Projeto 2",
        description: "Descrição do projeto 2",
        link: "https://github.com",
        background: "bg-blue-500",
      },
      {
        title: "Projeto 3",
        description: "Descrição do projeto 3",
        link: "https://github.com",
        background: "bg-green-500",
      },
      {
        title: "Projeto 4",
        description: "Descrição do projeto 4",
        link: "https://github.com",
        background: "bg-yellow-500",
      },
      {
        title: "Projeto 5",
        description: "Descrição do projeto 5",
        link: "https://github.com",
        background: "bg-purple-500",
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
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <h3>{project.title}</h3>
                    <span>{project.description}</span>
                    <a href={project.link}>
                      <Link />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;