// TODO: add envalid
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3300,
  AUTH0_AUDIENCE: 'applaudo-auth',
  AUTH0_DOMAIN: 'https://dev-q-13jt2p.us.auth0.com/',
  SECRET_KEY: process.env.SECRET_KEY,
  TOKEN_EXPIRATION: process.env.TOKEN_EXPIRATION,
  BEARER: process.env.BEARER
});
