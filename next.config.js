/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    // prependData: `@import "@/styles/index.scss";`,
    prependData: `@import "@/app/assets/scss/index.scss";`,
    // prependData: `@import "src/app/assets/scss/index.scss";`,
  },

}

module.exports = nextConfig
