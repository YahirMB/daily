const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
        assetExts: ['ttf', 'png', 'jpg', 'jpeg', 'gif', 'webp'], // Extensiones de assets que quieres manejar
      },    
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
