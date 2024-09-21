import { CollectionConfig } from 'payload/types';

const Companies: CollectionConfig = {
  slug: 'companies',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'site',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media', // slug of media collection
      hasMany: false,
      required: true,
    },
  ],
};
export default Companies;
