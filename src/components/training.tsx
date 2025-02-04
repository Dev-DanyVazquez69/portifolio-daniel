import Image from "next/image";
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const Training = () => {

  const formacao: {
    title: string;
    institution: string;
    description: string;
    date: string;
  }[] = [
      {
        title: "Bacharelado em sistemas de informação",
        institution: "UNDB - Centro Universitário",
        description: "Bacharelado em Sistemas de Informação",
        date: " Março de 2020 - Dezembro de 2024",
      },
    ]

  return (
    <div id="training" className="flex flex-col h-1/2 py-20 items-center gap-16">
      <h2 className="font-bold text-2xl">Formação</h2>
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
                  <CardContent className="aspect-square flex flex-col items-center justify-center gap-5 p-6 border text-center rounded-sm">
                    <Image
                      src="/undb.png"
                      alt="UNDB"
                      width={200}
                      height={200}/>
                    <h3 className="text-lg font-bold uppercase">{formacao.title}</h3>
                    <span className="text-sm font-thin italic">{formacao.date}</span>
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

export default Training;