"use strict";var precacheConfig=[["/trionictuningtutorials/index.html","0b537025abdd0c30fcc9ceb0d4adec76"],["/trionictuningtutorials/static/css/main.7082105d.css","e346d87053d349197565a508a9605a8d"],["/trionictuningtutorials/static/js/main.1bfd6262.js","3a7bc30689b9869feed8c012b7607e9f"],["/trionictuningtutorials/static/media/DYNOGRAPH.6e147be9.JPG","6e147be96cff9de6364484595602b27b"],["/trionictuningtutorials/static/media/airm.58fbc64e.JPG","58fbc64e29d013b2430066c662ba5759"],["/trionictuningtutorials/static/media/arv.93b80150.JPG","93b80150a1e92cbb22f91d8211d41168"],["/trionictuningtutorials/static/media/arv2.f184166c.JPG","f184166c013bc88fb2f4420fe03ef176"],["/trionictuningtutorials/static/media/fuel.c2c2fddf.JPG","c2c2fddf41aac56d88b23ecd44acd8dc"],["/trionictuningtutorials/static/media/iplim.3cceb6ee.JPG","3cceb6ee58b5d2353dbca1d1fe7b6ab8"],["/trionictuningtutorials/static/media/manif.306474c5.JPG","306474c5b011aa8f34a551988c863c95"],["/trionictuningtutorials/static/media/map.6c322315.JPG","6c322315cdd03ff3a6ff019f178b00f1"],["/trionictuningtutorials/static/media/pwm.3782d074.JPG","3782d0742dd05b42856ea12abd132fc6"],["/trionictuningtutorials/static/media/rmupd.56cfe26a.JPG","56cfe26a70efd20fd3bb83c3db3d8f0d"],["/trionictuningtutorials/static/media/scaleboost.f380975b.JPG","f380975b6ad08ef3af379d4bbbd9374e"],["/trionictuningtutorials/static/media/scalefuel.85594921.JPG","85594921c655069dda61121338bcaa0d"],["/trionictuningtutorials/static/media/scaleign.507afa59.JPG","507afa59809ba7abff381fcaf867a2f4"],["/trionictuningtutorials/static/media/tqref.3e82dedb.JPG","3e82dedb609fe63d4b1bb23d450bd44f"],["/trionictuningtutorials/static/media/tqref2.8b93ef68.JPG","8b93ef68a6f7d6627f67459018d29d09"],["/trionictuningtutorials/static/media/tqref3.596e1449.JPG","596e14492563512e387599cf7aeb7d37"],["/trionictuningtutorials/static/media/tsl.4bf9c058.JPG","4bf9c0585dbcf6ef182641f151ed4e2e"],["/trionictuningtutorials/static/media/twg.3f9c7271.JPG","3f9c7271f47ae0883f5f8856466f0b3d"],["/trionictuningtutorials/static/media/wbai.017518dc.JPG","017518dca81ce4915e742a65c640f78d"],["/trionictuningtutorials/static/media/wbref.671facce.JPG","671facce67f76ff88b0f12321a77193e"],["/trionictuningtutorials/static/media/xsp.23464802.JPG","234648024ca3323454f5f3336d1cb9ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(t,e){var n=new URL(t);return"/"===n.pathname.slice(-1)&&(n.pathname+=e),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(t,e,n,i){var a=new URL(t);return i&&a.pathname.match(i)||(a.search+=(a.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(t,e){if(0===t.length)return!0;var n=new URL(e).pathname;return t.some(function(t){return n.match(t)})},stripIgnoredUrlParameters=function(t,n){var e=new URL(t);return e.hash="",e.search=e.search.slice(1).split("&").map(function(t){return t.split("=")}).filter(function(e){return n.every(function(t){return!t.test(e[0])})}).map(function(t){return t.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(t){var e=t[0],n=t[1],i=new URL(e,self.location),a=createCacheKey(i,hashParamName,n,/\.\w{8}\./);return[i.toString(),a]}));function setOfCachedUrls(t){return t.keys().then(function(t){return t.map(function(t){return t.url})}).then(function(t){return new Set(t)})}self.addEventListener("install",function(t){t.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!n.has(e)){var t=new Request(e,{credentials:"same-origin"});return fetch(t).then(function(t){if(!t.ok)throw new Error("Request for "+e+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return i.put(e,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(t){var n=new Set(urlsToCacheKeys.values());t.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),i="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,i),t=urlsToCacheKeys.has(n));var a="/trionictuningtutorials/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(t){return t.match(urlsToCacheKeys.get(n)).then(function(t){if(t)return t;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});