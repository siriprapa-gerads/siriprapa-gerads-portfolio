import { useRef } from "react";
import { sliderVariants } from "./sliderVariants";
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import Card from "../card/card";


type sliderProps = {
    cards: {
      title: string;
      image:string;
      description: string;
      lists: string[];    // feature
      chips: string[];    // tech stack
      link: string;       // liveDemo
      github?: string;
    }[];
}

const Slider = ({ cards = [] }: sliderProps) => {
  
  const carouselRef = useRef<HTMLDivElement>(null);

  // for all device responsive
  // change px to 100% for slid behaviour
  const slideAmount = () => {
    if (!carouselRef.current) return 0;

    return carouselRef.current.clientWidth * 1;
  };

  // handle pre next button
  const prev = () => {
    if (!carouselRef.current) return;

     carouselRef.current.scrollLeft -= slideAmount();
  }
  const next = () => {
    if (!carouselRef.current) return;
    
     carouselRef.current.scrollLeft += slideAmount();
  }

  const {
    base,
    button,
    carousel,
  } = sliderVariants()
  return (
    <div className={base()}> 
       <button className={button()} onClick={prev}>
          <MdOutlineNavigateBefore size={32} />
       </button>
      <div  className={carousel()} ref={carouselRef}>
        {cards?.map((card) => (
          <Card 
            key={card.title}
            title={card.title}
            image={card.image}
            description={card.description}
            lists={card.lists}
            chips={card.chips}      
            link={card.link}
            github={card?.github}
          />
        )) || <p>No data available</p>}
      </div>
      <button className={button()} onClick={next}>
        <MdNavigateNext size={32} />
      </button>
    </div>
  )
}

export default Slider
