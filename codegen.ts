import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: ['./graphql/documents/*.graphql'],
  generates: {
    'graphql/generated/hooks.tsx': {
      plugins: ['typescript-react-apollo'],
      preset: 'import-types',
      presetConfig: {
        typesPath: 'graphql/generated/operations',
      },
    },
    'graphql/generated/operations.ts': {
      plugins: ['typescript-operations'],
      preset: 'import-types',
      presetConfig: {
        typesPath: 'graphql/generated/types',
      },
    },
    'graphql/generated/resolvers.ts': {
      config: {
        contextType: 'graphql/context#Context',
      },
      plugins: ['typescript-resolvers'],
      preset: 'import-types',
      presetConfig: {
        typesPath: 'graphql/generated/types',
      },
    },
    'graphql/generated/types.ts': {
      config: {
        namingConvention: {
          enumValues: 'change-case-all#camelCase',
        },
      },
      plugins: ['typescript'],
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
  ignoreNoDocuments: true,
  schema: 'http://localhost:3000/api/graphql',
};

export default config;
