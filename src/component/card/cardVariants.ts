import { tv } from "tailwind-variants";

export const cardVariants = tv({
  // !! do not put any px or mx in base
  slots: {
    base: `w-full flex-none`,
    content: `md:text-[14px] text-[12px] pb-14 h-full md:px-12 px-4`,
    title: `font-blod text-3xl text-center mb-2`,
    image: `w-60 mx-auto`,
    description: `md:mt-5 mt-2`,
    list: `list-disc pl-6`,
    chips: `mt-4 flex flex-wrap gap-1`,
    chip: `md:text-[12px] text-[8px] rounded-md px-2 bg-gray-300 dark:bg-gray-800`,
  }
});
