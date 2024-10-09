// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/frontend/components/footer/*.js',
    './src/frontend/components/pages/AboutUs/*.js',
    './src/frontend/components/pages/Cart/*.js',
    './src/frontend/components/pages/CheckOut/*.js',
    './src/frontend/components/pages/Contact/*.js',
    './src/frontend/components/pages/Meniu/*.js',
    './src/frontend/components/pages/ProductPage/*.js',
    './public/index.html'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []) // corectat
  ]
};
