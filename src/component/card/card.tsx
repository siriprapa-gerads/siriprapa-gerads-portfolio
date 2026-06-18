import { t } from "i18next";
import { cardVariants } from "./cardVariants"



type cardProps = {
    title: string;      // project.name
    image: string;
    description: string;
    lists: string[];    // feature list
    chips: string[];    // tach stack
    link: string;       // livedemo
    github?: string;
}

const Card = ({ title, image, description, lists, chips, link, github }: cardProps) => {

    const { 
        base, 
        content,
        title: titleclass,
        image: imageclass,
        description: descriptionclass,
        list: listclass,
        chips: chipsclass,
        chip: chipclass,

    } = cardVariants();
    
    return (
        <div className={base()}>
            <div className={content()}>
                <h1 className={titleclass()}>{title}</h1>
                <img className={imageclass()} src={image} />
                <p className={descriptionclass()}>{description}</p>
                {/* list features */}
                <h2 className="md:mt-2 mt-1">{t("projects.featureTitle")}</h2>
                <ul className={listclass()}>
                    {lists.map((list) => (
                        <li key={list}>{list}</li>
                    ))}
                </ul>
                {/* chip - teach stack */}
                <div className={chipsclass()}>
                    {chips?.map((chip) => (
                        <div className={chipclass()} key={chip}>{chip}</div>
                    ))}
                    {github && (
                        <a 
                            href={github}
                            className={`
                                bg-pink-200 dark:bg-pink-950 
                                hover:bg-pink-300 dark:hover:bg-pink-900
                                ${chipclass()}`
                            }
                            target="_blank" 
                            rel="noopener noreferrer">
                                GitHub
                        </a>
                    )}
                    <a 
                        href={link}
                        className={`
                            bg-pink-200 dark:bg-pink-950
                            hover:bg-pink-300 dark:hover:bg-pink-900
                            ${chipclass()}`
                        }
                        target="_blank" 
                        rel="noopener noreferrer">
                            LiveDemo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
