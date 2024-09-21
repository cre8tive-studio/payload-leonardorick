import { CollectionConfig } from 'payload/types';

const Experiences: CollectionConfig = {
  slug: 'experiences',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'company',
      type: 'relationship',
      relationTo: 'companies',
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'funTitle',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'year',
      localized: true,
      required: true,
      type: 'text',
    },
  ],
};

export default Experiences;
