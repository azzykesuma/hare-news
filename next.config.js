/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images : {
    domains : ['pict.sindonews.net','cdn-2.tstatic.net',
     'cloud.jpnn.com','cdns.klimg.com', 'images.ctfassets.net']
  }
}

module.exports = nextConfig
