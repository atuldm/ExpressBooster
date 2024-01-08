module.exports = {
  allowed: [
    '192.168.1.20',
    '127.0.0.1'
  ]
}

module.exports.staticConfig = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}

module.exports.paths = [
  {
    url: "downloads",
  },
  {
    url: "images",
    options: {
      dotfiles: 'ignore',
      etag: false,
      extensions: ['ico', 'jpg', 'jpeg', 'png', 'svg'],
    }
  }
]