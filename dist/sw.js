/* 2 ways: 1) CDN, 2) Bundle

/* 1: CDN : using the workbox-sw loader, which loads Workbox packages at runtime
 from our CDN.
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);
*/
console.log("💎Hi from Service Worker");

// 2) if not CDN
import { registerRoute } from "workbox-routing/registerRoute";
import { precacheAndRoute } from "workbox-precaching";
import { NetworkFirst } from "workbox-strategies";
/* The code below tells Workbox that when a request is made,
it should see if the regular expression matches part of the URL,
and if it does, do something (*) with that request.
(*) : passing the request through one of Workbox’s caching strategies:
NetworkFirst : =>  fetch and fallback with cache */

// workbox.routing.registerRoute(...) if CDN
registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com/, // or new RegExp("^https://jsonplaceholder.typicode.com"),
  // new workbox.strategies.NetworkFirst() if CDN
  new NetworkFirst()
);

/* Tells workbox where to inject the pre-cached information
workbox.precacheAndRoute(); how to cache data coming
from an API.*/
// workbox.precaching.precacheAndRoute(...) if CDN
precacheAndRoute([{"revision":"954dbf6928965cdfd47866fcabc700f7","url":"images/site.webmanifest"}], self.__precacheManifest || []);
