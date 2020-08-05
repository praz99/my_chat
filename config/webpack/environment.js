const { environment } = require('@rails/webpacker');
// edited from here
["css", "moduleCss"].forEach(loaderName => {
  const loader = environment.loaders.get(loaderName);

  loader.test = /\.(p?css)$/i;

  environment.loaders.insert(loaderName, loader);
});
// to here

module.exports = environment;
