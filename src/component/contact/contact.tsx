import React from 'react'

type contactProps = {
    items: {
        id: string;
        link: string;
        icon: React.ReactElement;
    }[];
}

function Contact({ 
    items
}: contactProps) {

  return (
    <div className='flex gap-8 mt-5 '>
        {items.map((item) => (
            <a 
                key={item.id} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className='hover:text-gray-400 hover:transition-text-color hover:duration-500'>
                    {item.icon}
            </a>
        ))}
    </div>
  )
}

export default Contact