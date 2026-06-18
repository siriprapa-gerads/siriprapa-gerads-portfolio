import { categoryVariants } from "./categoryVariants"

type categoryProps = {
    items: {
        title: string;
        infos: string[];
    }[];
}

const Category = ({ items }: categoryProps) => {

    return (
        <div className="flex flex-col md:gap-6 gap-2">
            {items.map((item) => (
                <div key={item.title}>
                    <h1 className={categoryVariants()}>{item.title}</h1>
                    {item.infos.map((info) => (
                        <span 
                            className="text-[18px]"
                            key={info}
                        >
                            {info},{" "}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Category