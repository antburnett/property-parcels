module.exports = function(config) {
  config.addPassthroughCopy('src/js');
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/favicon');
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
