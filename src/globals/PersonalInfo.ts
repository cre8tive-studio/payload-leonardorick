import { GlobalConfig } from 'payload/types';

const PersonalInfo: GlobalConfig = {
  slug: 'personalInfo',
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
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'startWorkingDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      required: true,
    },
    {
      name: 'links',
      type: 'group',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
          required: true,
        },
        {
          name: 'github',
          type: 'text',
          required: true,
        },
        {
          name: 'stackoverflow',
          type: 'text',
          required: true,
        },
        {
          name: 'spotify',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};

export default PersonalInfo;
