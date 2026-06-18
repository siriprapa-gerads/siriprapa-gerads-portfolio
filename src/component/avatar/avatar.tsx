import { avatarVariants } from "./avatarVariants";

type avatarProps = {
    avatar: string
    alt: string
}

const Avatar = ({ avatar, alt }: avatarProps) => {
  return (
    <div className={avatarVariants()}>
      <img src={avatar} alt={alt} />
    </div>
  )
}

export default Avatar