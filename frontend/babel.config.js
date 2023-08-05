module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@assets': './app/assets',
          '@components': './app/components',
          '@screens': './app/screens',
          '@router': './app/router',
          '@services': './app/services',
          '@store': './app/store',
          '@shared': './app/shared',
          '@theme': './app/theme',
          '@models': './app/models',
        },
      },
    ],
    'react-native-reanimated/plugin', 
  ],
};