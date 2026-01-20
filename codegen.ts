import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const URL = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

const config: CodegenConfig = {
  overwrite: true,
  schema: URL,
  documents: [
    "core/**/*.graphql",
    "!./core/graphql/queries/branches.graphql",
    "!./core/graphql/queries/zoneMemberAddresses.graphql",
    "!./core/graphql/queries/zones.graphql",
  ],
  generates: {
    "core/graphql/types/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
