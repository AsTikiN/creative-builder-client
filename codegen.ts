import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:9000/graphql",
  documents: "src/api/input/**/*.{ts,tsx}",
  generates: {
    "src/api/output/": {
      preset: "client",
      config: {
        skipTypename: false,
        dedupeFragments: true,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
