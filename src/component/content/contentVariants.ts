import { tv } from "tailwind-variants";

export const contentVariants = tv({
  slots: {
    base: `md:pr-14 md:pl-80 px-8
         flex flex-col justify-center
         break-words
         max-w-[100vw] min-h-[100vh] h-fit`,
    title: `text-5xl pb-6 font-bold`,
    subtitle: `text-3xl text-blue-500 dark:text-blue-700 pt-4 font-bold`,
    content: `md:text-[18px] text-[16px]`
  }
});