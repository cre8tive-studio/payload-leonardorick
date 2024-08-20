import { CollectionConfig } from 'payload/types';

const Generals: CollectionConfig = {
  slug: 'generals',
  admin: {
    useAsTitle: 'key',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
    },
    {
      name: 'data',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'richText',
          localized: true,
        },
      ],
    },
  ],
};

export default Generals;
