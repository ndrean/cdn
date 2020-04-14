// original source of service worker
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

console.log("💎 Hello from Service Worker");

// placeholder that tell workbox where to inject the precached info
workbox.precaching.precacheAndRoute([{"revision":"90ccc6e060dff1e11990e1d0e5d7c68c","url":"android-chrome-192x192.png"},{"revision":"a9e90babc27bf17deb5735f732cfe08e","url":"android-chrome-512x512.png"},{"revision":"daf8015e3d222d6c9deef2b095a56b2a","url":"app.css"},{"revision":"411beb6aab2e2adebc10bf103d03f623","url":"app.js"},{"revision":"015012dc6902b573cd8bbe833234cc44","url":"apple-touch-icon.png"},{"revision":"a04c56032bcc6f71282775914196d499","url":"favicon-16x16.png"},{"revision":"3c42cc0671b83d50d439f5b3eab0b85a","url":"favicon-32x32.png"},{"revision":"4cbd521dd66572bb35cdc745d4a43319","url":"favicon.ico"},{"revision":"ea5186e4d927a9c8ab5220b336099111","url":"images/network-first.png"},{"revision":"92cbca143a9a2b05de1d4c50e17d738e","url":"index.html"},{"revision":"8d09e22278fb87daa7b86bf319f81cdf","url":"workbox-407421f7.js"},{"revision":"b4750ebaf6277569ca4492c3769b50b4","url":"workbox-ec4d79a7.js"}]);

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com/,
  new workbox.strategies.NetworkFirst()
);
