import Link from "../link/link";

type overviewProps = {
    title: string;      // position
    subtitle: string;   // company
    date: string;
    description: string;
    link?: {
        label: string;
        url: string;
    }
}

const Overview = ({ title, subtitle, date, description, link }: overviewProps) => {
  return (
    <div>
        <h1 className="text-3xl font-bold">
            {title}
        </h1>
        <div className="flex justify-between md:text-md text-sm mt-1.5 mb-2">
            <h2>{subtitle}</h2>
            <p>{date}</p>
        </div>
        <div className="mt-4">
            <p>
                <span>{description}
                    {link &&
                        <Link 
                            link={{
                                label: link.label,
                                url: link.url
                            }} 
                        />
                    }
                </span>
            </p>
        </div>

    </div>
  )
}

export default Overview