module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.ios.ts', '.android.ts', '.tsx'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@router': './src/router',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@utilities': './src/utilities',
        },
      },
    ],
  ],
};
