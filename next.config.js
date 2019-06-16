const path = require('path')
const compose = require('next-compose')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withReactSvg = require('next-react-svg')
const withImages = require('next-images')

module.exports = compose([
  [withFonts, {
    enableSvg: true,
  }],
  [withCSS, {}],
  [withSass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    }
  }],
  [withImages, {}],
  [withReactSvg, {
    include: path.resolve(__dirname, 'src/assets/svg')
  }],
  {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })

      return config
    }
  }
])