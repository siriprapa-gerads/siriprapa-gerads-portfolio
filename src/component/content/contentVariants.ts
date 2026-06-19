import { tv } from "tailwind-variants";

export const contentVariants = tv({
  slots: {
    base: `md:pr-14 md:pl-80 px-8
         flex flex-col justify-center
         break-words
         max-w-[100vw] min-h-[100vh] h-fit`,
    title: `md:text-5xl text-4xl font-bold mb-4`,
    subtitle: `md:text-3xl text-2xl text-blue-500 dark:text-blue-700 mb-4 font-bold`,
    content: `text-[14px]`
  }
});

// content: `md:text-[18px] text-[16px]`