var _ = require('lodash');
var assets = require('./assets');

module.exports = function(app) {

  app.get('/', function(req, res) {
    return render(res, 'index.html');
  });

};

function render(res, template, data) {
  return res.render(template, _.merge((data || {}), { assets: assets.getAssets() }));
}