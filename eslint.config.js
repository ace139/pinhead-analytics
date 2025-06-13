import globals from "globals";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";

// Workaround for https://github.com/sindresorhus/globals/issues/147
const trimmedGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
);

export default tseslint.config(
    {
        ignores: ['dist/', '.astro/']
    },
    // Global config
    {
        languageOptions: {
            globals: {
                ...trimmedGlobals,
                ...globals.node,
            }
        }
    },
    // TypeScript files
    ...tseslint.configs.recommended,
    // Astro files
    ...pluginAstro.configs['flat/recommended'],
    // Prettier config to disable formatting rules
    eslintConfigPrettier,
);
