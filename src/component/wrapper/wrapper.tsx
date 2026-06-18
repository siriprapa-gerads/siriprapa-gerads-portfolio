import { wrapperVariants } from "./wrapperVaraints";

type WrapperProps = {
    children: React.ReactNode
    className: string
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={wrapperVariants({ className })}>
      {children}
    </div>
  )
}
  
export default Wrapper
