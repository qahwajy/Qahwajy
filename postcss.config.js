module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./*.html', './js/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:.]+(?<!:)/g) || [],
    }),
  ],
};
