Package.describe({
  summary: "Bloom filter backed by xxhash",
  version: "0.0.4",
  git: "https://github.com/xamfoo/meteor-xx-bloom"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('bloom.js', 'server');
  api.export('BloomFilter', 'server');
});

Npm.depends({
	xxhash: "0.2.0"
});
