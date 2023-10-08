import { buildConfig } from 'payload/config';
import path from 'path';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';
import Media from './collections/Media';
import People from './collections/People';
import Recommendations from './collections/Recommendations';
import Quotes from './collections/Quotes';

import cloudinaryPlugin from 'payload-cloudinary-plugin/dist/plugins';

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [Categories, Posts, Tags, Users, Media, Recommendations, Quotes, People],
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
