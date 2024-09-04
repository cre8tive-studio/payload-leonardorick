import { CollectionConfig } from 'payload/types';

const Quotes: CollectionConfig = {
  slug: 'quotes',
  admin: {
    useAsTitle: 'quote',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'label',
      type: 'text',
    },
  ],
};

export default Quotes;
