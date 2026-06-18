import { sidebarVariants } from "./sidebarVaraints";

type sidebarProps = {
    children: React.ReactNode
}

const Sidebar = ({ children }: sidebarProps) => {

  return (
    <nav className={sidebarVariants()}>
      {children}
    </nav>
  )
}

export default Sidebar
