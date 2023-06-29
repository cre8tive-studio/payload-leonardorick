import { CollectionConfig } from 'payload/types';

const Persons: CollectionConfig = {
  slug: 'persons',
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
export default Persons;
