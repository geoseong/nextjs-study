self.__precacheManifest = [
  {
    "url": "/_next/static/QER5OnKZLtZ5dkw6ZnXzy/pages/one.js"
  },
  {
    "url": "/_next/static/chunks/commons.99e02275e0fa4c7e1d67.js"
  },
  {
    "url": "/_next/static/runtime/main-9dd82691e95adab146a5.js"
  },
  {
    "url": "/_next/static/runtime/webpack-42652fa8b82c329c0559.js"
  },
  {
    "url": "/_next/static/QER5OnKZLtZ5dkw6ZnXzy/pages/three.js"
  },
  {
    "url": "/_next/static/QER5OnKZLtZ5dkw6ZnXzy/pages/five.js"
  },
  {
    "url": "/_next/static/QER5OnKZLtZ5dkw6ZnXzy/pages/index.js"
  },
  {
    "url": "/_next/static/QER5OnKZLtZ5dkw6ZnXzy/pages/two.js"
  },
  {
    "url": "/_next/static/QER5OnKZLtZ5dkw6ZnXzy/pages/six.js"
  },
  {
    "url": "/_next/static/QER5OnKZLtZ5dkw6ZnXzy/pages/four.js"
  },
  {
    "url": "/_next/static/QER5OnKZLtZ5dkw6ZnXzy/pages/about.js"
  },
  {
    "url": "/_next/static/QER5OnKZLtZ5dkw6ZnXzy/pages/_error.js"
  },
  {
    "url": "/_next/static/QER5OnKZLtZ5dkw6ZnXzy/pages/_app.js"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET');
