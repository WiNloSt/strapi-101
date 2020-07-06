module.exports = ({ env }) => {
  const host = env('HOST', '0.0.0.0')
  const port = env('PORT', '8080')
  return {
    host,
    port,
    url: env('SITE_URL', `http://${host}:${port}`),
  }
}
