import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: `dark:text-white 
         bg-gray-300 dark:bg-gray-800
         px-4 py-2 cursor-pointer
         max-w-[180px] w-fit
         font-normal
         whitespace-nowrap truncate
         fixed rounded-lg`,
  variants: {
    type: {
        changeMode: `w-[150px]
                     bottom-[30px] 
                     md:left-[70px] left-[30px]
                     md:bg-gray-400 md:dark:bg-gray-700
                     `,
        changeLanguage: `
                     md:top-[40px] 
                     md:bottom-auto bottom-[30px] 
                     md:right-[40px] right-[30px]
                     px-3 py-1`,
    }
  },
});