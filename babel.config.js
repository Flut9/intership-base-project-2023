module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
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
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@entities': './src/entities',
          '@features': './src/features',
          '@screens': './src/screens',
          '@shared': './src/shared',
          '@widgets': './src/widgets',
          '@processes': './src/processes',
          '@ui': './src/shared/ui',
          '@entities': './src/entities',
        },
      },
    ],
  ],
}
