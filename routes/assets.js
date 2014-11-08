var _ = require('lodash');

// =====================================
// SITE AND VENDOR ASSETS
// =====================================

// This feature needs a little finessing to be useful.

var assets = {
  sitePrefix: '/js/',
  site: [
    '_site.js'
  ],

  vendorPrefix: '/js/vendor/',
  vendor: [
  ]
};

// =====================================
// PUT THEM TOGETHER
// =====================================

function prefixAssets(prefix, assets) {
  return _.map(assets, function(asset) {
    return prefix + asset;
  });
}

var assetList = [];
assetList = assetList.concat( prefixAssets(assets.vendorPrefix, assets.vendor) );
assetList = assetList.concat( prefixAssets(assets.sitePrefix,   assets.site)   );

module.exports = {
  getAssets: function() {
    return assetList;
  }
};