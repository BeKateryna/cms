module.exports = ({ env }) => ({
  host: process.env.CMS_HOST ||  '127.0.0.1',
  port: process.env.CMS_PORT || 1338,
  admin: {
    auth: {
      secret: process.env.CMS_ADMIN_JWT_SECRET ||'f83e82e4650a1d850357bad397780619',
    },
  },
  cron: { enabled: true },
});
