import { tapVariants } from "./tapVaraints"

type tapProps = {
    type: "header" | "footer"
}

const Tap = ({ type }: tapProps) => {
  return (
    <div className={tapVariants({ type })} ></div>
  )
}

export default Tap