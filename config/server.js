module.exports = ({ env }) => ({
  host:"https://nobhubcms.azurewebsites.net",
  port: "${process.env.PORT || 1337}",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a16a9806f89311bf1c1a7d2b6f756d4e'),
    },
  },
});
