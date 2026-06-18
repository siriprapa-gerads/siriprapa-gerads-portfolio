import { tv } from "tailwind-variants";

export const tapVariants = tv({
  base: `fixed right-0
         bg-white
         dark:bg-gray-950 w-full`,
  variants : {
    type : {
        header: `top-0 h-[78px]`,
        footer: `bottom-0 h-[82px]`
    }
  }
});