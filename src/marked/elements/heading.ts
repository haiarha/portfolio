import { Renderer } from "marked";

const headingClassesMap: Record<string, string> = {
  h1: "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl",
  h2: "mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl",
  h3: "mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl",
  h4: "mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl",
  h5: "mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-2xl",
  h6: "mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900",
};

export const heading: Renderer["heading"] = (text, level) => {
  const tagName = `h${level}`;
  const classes = headingClassesMap[tagName];

  return `
  <${tagName} class='${classes}'>
    ${text}
  </${tagName}>`;
};
