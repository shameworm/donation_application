module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~/assets': './assets',
          '~/components': './components',
          '~/screens': './screens',
          '~/navigation': './navigation',
        },
      },
    ],
  ],
};
