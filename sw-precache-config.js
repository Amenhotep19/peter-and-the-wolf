module.exports = {
  staticFileGlobs: [
    'build/css/**.*',
    'build/**.html',
    'build/**.json',
    'build/images/**.*',
    'build/sounds/**.mp3',
    'build/js/**.*',
  ],
  stripPrefix: 'build/',
  maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
  runtimeCaching: [
    {
      urlPattern: /https?:\/\/fonts.+/,
      handler: 'cacheFirst',
    },
  ],
};