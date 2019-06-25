const path = require('path')

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

const compose = require('next-compose')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withReactSvg = require('next-react-svg')
const withImages = require('next-images')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

dotenvLoad();

const withNextEnv = nextEnv();

const nextConfig = ({
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

    if (config.mode === 'production') {
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(
          new OptimizeCSSAssetsPlugin({})
        )
      }
    }

    return config
  }
})

module.exports = ({
  // For deployment with https://now.sh
  // target: 'serverless'
  ...compose([
    [withNextEnv, {}],
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
    nextConfig
  ])
})
