export default {
    name: 'socialmediaads',
    title: 'SocialMediaAds',
    type: 'document',
    fields: [
        { 
          name: 'name',
          title: 'Name',
          type: 'string',
        },
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
    ]
  }