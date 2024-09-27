import dotenv from 'dotenv';
import { ConfigFile } from '@rtk-query/codegen-openapi';

dotenv.config({ path: ['.env', '.env.local'] });

const config: ConfigFile = {
  schemaFile: `${process.env.VITE_API_URL}/schema.yaml`,
  apiFile: './src/store/api/emptyApi.ts',
  apiImport: 'emptyApi',
  outputFile: './src/store/api/baseApi.ts',
  exportName: 'baseApi',
  hooks: true,
  tag: true,
};

export default config;
