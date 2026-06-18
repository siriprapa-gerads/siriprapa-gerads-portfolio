
type linkProps = {
    link: {
        label: string;
        url: string;
    }
}

const Link = ({ link }: linkProps) => {
  return (
    <a 
        href={link.url}
        className='underline text-blue-500 hover:text-blue-300 mx-1'
        target="_blank" 
        rel="noopener noreferrer"
    >
            {link.label}
    </a>
  )
}

export default Link