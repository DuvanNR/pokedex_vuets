module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/pokedex_dist/'
      : '/'
  }