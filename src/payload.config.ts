import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { webpackBundler } from '@payloadcms/bundler-webpack';

import path from 'path';
import Tags from './collections/Tags';
import Users from './collections/Users';
import Media from './collections/Media';
import People from './collections/People';
import Recommendations from './collections/Recommendations';
import Quotes from './collections/Quotes';
import Generals from './collections/Generals';
import Experiences from './collections/Experiences';
import Companies from './collections/Companies';

import PersonalInfo from './globals/PersonalInfo';

import cloudinaryPlugin from 'payload-cloudinary-plugin/dist/plugins';

export default buildConfig({
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  editor: slateEditor({}),
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  collections: [
    Tags,
    Users,
    Media,
    Recommendations,
    Quotes,
    People,
    Generals,
    Experiences,
    Companies,
  ],
  globals: [PersonalInfo],
  localization: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [cloudinaryPlugin()],
});
