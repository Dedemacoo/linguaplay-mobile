const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Firebase v9+ modular imports need .cjs extension resolution
config.resolver.sourceExts.push('cjs');

// Suppress Firebase warnings about require cycles
config.resolver.unstable_enablePackageExports = true;

module.exports = config;
