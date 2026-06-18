import React from 'react'
import { contentVariants } from './contentVariants'

type contentProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode
}

const Content = ({
  title,
  subtitle,
  className,
  children
}: contentProps) => {

  const { 
    base, 
    title: titleClass, 
    subtitle: subtitleClass,
    content: contentClass
  } = contentVariants()

  return (
    <div className={`${base()} ${className ?? ""}`}>
      <div className={titleClass()}>
        <h1 >{title}</h1>
        {subtitle &&
          <h2 className={subtitleClass()}>{subtitle}</h2>
        }
      </div>
      <div className={contentClass()}>
        {children}
      </div>
    </div>
  )
}

export default Content
