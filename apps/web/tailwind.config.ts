// tailwind config is required for editor support

import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/app/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/sections/**/*.tsx",
  ],
presets: [sharedConfig],
};

export default config;
