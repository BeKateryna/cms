module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: process.env.CMS_CLOUDINARY_NAME || 'kyrrexsupportmain',
      api_key: process.env.CMS_CLOUDINARY_API_KEY || '688278264396829',
      api_secret: process.env.CMS_CLOUDINARY_API_SECRET || 'APH0spptNuI1_oalvy7LElyrji0',
      default_folder: process.env.CMS_CLOUDINARY_DEFAULT_FOLDER || 'development',
    },
  },
});

