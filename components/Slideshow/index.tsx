import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import allinImg from "../../public/allin.jpg";
import effectmgmtImg from "../../public/effectmanagement.jpg";
import escapeeveImg from "../../public/escapeeve.jpg";
import searchengineImg from "../../public/searchengine.png";

const defaultImages = [
  <Image
    src={allinImg}
    alt={"All In Clark County"}
    width={3800}
    height={1905}
  />,
  <Image
    src={effectmgmtImg}
    alt={"Effect Management"}
    width={3800}
    height={1905}
  />,
  <Image src={escapeeveImg} alt={"Escape Eve"} width={3800} height={1905} />,
  <Image
    src={searchengineImg}
    alt={"UC Irvine Search Engine"}
    width={3800}
    height={1905}
  />,
];

export function Slideshow({
  content,
  className,
}: {
  content?: React.ReactNode[];
  className?: string;
}) {
  if (!content) {
    content = defaultImages;
  }
  return (
    <Carousel className={className} plugins={[Autoplay({ delay: 2000 })]}>
      <CarouselContent>
        {content.map((c, i) => (
          <CarouselItem key={"slideshowItem" + i}>{c}</CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
