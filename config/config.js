module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoURI: 'mongodb://kamil:polska12@ds241647.mlab.com:41647/sellers'
}