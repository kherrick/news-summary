module.exports = {
  globDirectory: "./",
  globPatterns: [
    "404.html",
    "index.html",
    "service-worker/init.mjs",
  ],
  globIgnores: [
    "**/node_modules/**",
    "**/templates/**",
    "service-worker.js",
    "workbox-*.js",
    "workbox-*.cjs",
  ],
  swDest: "./service-worker.js",
  // define runtime caching rules
  runtimeCaching: [
    {
      // match any request
      urlPattern: new RegExp("^.*$"),

      // apply a network-first strategy
      handler: "NetworkFirst",

      options: {
        // use a custom cache name
        cacheName: "news-summary-cache",

        expiration: {
          // 365 days
          maxAgeSeconds: 365 * 24 * 60 * 60,
        },
      },
    },
  ],
};
