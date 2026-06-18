import type React from "react";
import Link from "../link/link";

type listProps = {
    title?: string;
    lists: {
        subtitle?: string;
        text: string | React.ReactNode;
        link?: {
            label: string;
            url: string;
        }
    }[];
}

const List = ({ title, lists }: listProps) => {
  return (
    <div className="mt-2 loading-relaxed">
        {title &&
            <h1 className="font-bold text-[16px] md:mt-2">{title}</h1>
        }
        <ul className="list-disc md:pl-5 pl-4 text-[14px]">
            {lists.map((list, i) => (
                <li key={i}>
                    {list.subtitle &&
                        <strong>{list.subtitle} : </strong>
                    }
                    {list.text}
                    {list.link &&
                        <Link 
                            link={{
                                label: list.link.label,
                                url: list.link.url
                            }} 
                        />
                    }
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List