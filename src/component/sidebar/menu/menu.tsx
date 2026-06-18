import { menuVariants } from "./menuVariants"
import { useAppContext } from "../../../context/context";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-scroll";


type menuProps = {
  items: {
    label: string;
    path: string;
    offset?: number;
  }[];
}

const Menu = ({ items }: menuProps) => {

  const { mobileMenu, toggleMobileBtn } = useAppContext();

  const { 
    base, 
    item: itemclass, 
    mobileBtn 
  } = menuVariants();

  return (
    <>
      <ul className={`${base()} ${mobileMenu ? "" : "toggleMobileMenu"}`}>
          {items.map((item) => (
              <li key={item.path} className={itemclass()} >
                <Link 
                  to={item.path} 
                  smooth={true} 
                  duration={500}
                  offset={item.offset}
                  onClick={toggleMobileBtn}>
                    {item.label}
                </Link>
              </li>
          ))}
       </ul>

       <button  onClick={toggleMobileBtn} className={mobileBtn()}>
          <BiMenuAltRight size={60} />
       </button>
    </>
  );
};

export default Menu
