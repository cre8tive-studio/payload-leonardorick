import { CollectionConfig } from 'payload/types';

const People: CollectionConfig = {
  slug: 'people',
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
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
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
export default People;
