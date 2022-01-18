module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: process.env.CMS_DATABASE_FILENAME || '.tmp/data.db',
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
