import type React from "react";
import { buttonVariants } from "./buttonVaraints";

type buttonProps = {
  type: "changeMode" | "changeLanguage";
  onClick: () => void;
  children?: React.ReactNode;
}

const Button = ({ type, onClick, children }: buttonProps) => {
  return (
    <button className={buttonVariants({ type })} onClick={onClick}>
      {children && (
        <div>{children}</div>
      )}
    </button>
  )
}

export default Button