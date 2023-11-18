import { Renderer, marked } from "marked";

import { heading } from "./elements/heading";

// docs: https://marked.js.org/using_pro#renderer
const renderer: Partial<Renderer> = {
  heading,
};

marked.use({ renderer });

export { marked };
