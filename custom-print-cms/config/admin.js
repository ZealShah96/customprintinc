module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '39d4182bf56ff2670334df8d8dbff052'),
  },
});
