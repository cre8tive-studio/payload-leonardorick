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
          name: 'htmlTag',
          type: 'select',
          options: [
            {
              value: 'p',
              label: '<p>',
            },
            {
              value: 'h1',
              label: '<h1>',
            },
            {
              value: 'h2',
              label: '<h2>',
            },
            {
              value: 'h3',
              label: '<h3>',
            },
          ],
        },
        {
          name: 'animationType',
          type: 'select',
          options: [
            {
              value: 'none',
              label: 'None',
            },
            {
              value: 'fadeOpacity',
              label: 'Fade Opacity',
            },
          ],
        },
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
