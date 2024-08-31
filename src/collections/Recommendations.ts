import { CollectionConfig } from 'payload/types';

const Recommendations: CollectionConfig = {
  slug: 'recommendations',
  admin: {
    useAsTitle: 'recommendation',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'recommendation',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'people',
    },
    {
      name: 'order',
      type: 'number',
    },
  ],
};

export default Recommendations;
