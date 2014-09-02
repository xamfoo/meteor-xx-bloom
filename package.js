Package.describe({
  summary: "Bloom filter backed by xxhash",
  version: "0.0.2",
  git: "https://github.com/ceejbot/xx-bloom"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('bloom.js');
  api.export('BloomFilter');
});

Npm.depends({
	xxhash: "0.2.0"
});
