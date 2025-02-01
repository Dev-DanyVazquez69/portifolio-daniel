import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Formacao = () => {

  const formacao: {
    title: string;
    institution: string;
    description: string;
    date: string;
  }[] = [
      {
        title: "Bacharelado em sistemas de informação",
        institution: "UNDB",
        description: "Bacharelado em sistemas de informação",
        date: "2020 - 2024",
      },
      {
        title: "Bacharelado em sistemas de informação",
        institution: "UNDB",
        description: "Bacharelado em sistemas de informação",
        date: "2020 - 2024",
      },
      {
        title: "Bacharelado em sistemas de informação",
        institution: "UNDB",
        description: "Bacharelado em sistemas de informação",
        date: "2020 - 2024",
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
          {formacao.map((formacao, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 border border-pink-600 text-center rounded-sm">
                    <h3>{formacao.title}</h3>
                    <span>{formacao.institution}</span>
                    <span>{formacao.description}</span>
                    <span>{formacao.date}</span>
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

export default Formacao;