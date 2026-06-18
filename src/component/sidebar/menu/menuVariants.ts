import { tv } from "tailwind-variants";

export const menuVariants = tv({
  slots: {
    base: `text-center
           md:static fixed top-0 right-0
           md:transition-none transition-color duration-1000
           flex flex-col
           md:mt-4 pt-30
           md:p-0 pb-15
           bg-gray-300 dark:bg-gray-800 
           w-full md:gap-1 gap-8
           z-100
           `,
    item: `cursor-pointer 
           hover:text-gray-400 hover:transition-text-color hover:duration-500
           md:text-xl text-3xl font-bold
           `,
    mobileBtn: `cursor-pointer 
           md:hidden fixed top-[2%] right-[3%]
           z-110
           `
  },
});
