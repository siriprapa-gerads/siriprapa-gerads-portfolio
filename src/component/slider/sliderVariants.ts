import { tv } from "tailwind-variants";

export const sliderVariants = tv({
  slots : {
    base: `
        flex justify-center items-center
        min-h-[60vh] h-fit pb-4
        `,
    carousel: `
        w-[900px]
        flex items-center
        overflow-x-scroll
        scroll-smooth
        `,
    button: `
        cursor-pointer
        font-normal
        hover:text-gray-300 hover:duration-500
        `, 
  }
});
