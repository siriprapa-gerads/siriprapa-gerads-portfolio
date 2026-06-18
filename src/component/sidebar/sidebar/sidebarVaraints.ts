import { tv } from "tailwind-variants";

export const sidebarVariants = tv({
    base: `
          md:flex md:flex-col md:justify-center md:items-center
          md:fixed md:top-0 md:bottom-0
          md:w-[300px]
          text-center
          bg-gray-300 dark:bg-gray-800
          `,
});
