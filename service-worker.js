"use strict";var precacheConfig=[["/trionictuningtutorials/index.html","2ae48837804d942198ed9faa17a980d8"],["/trionictuningtutorials/static/css/main.7044e447.css","6e033628e551e14f2eea8f8255278f24"],["/trionictuningtutorials/static/js/main.2e08d5fb.js","841137d37cc0538d1bdc52d4fe45b1f4"],["/trionictuningtutorials/static/media/DYNOGRAPH.6e147be9.JPG","6e147be96cff9de6364484595602b27b"],["/trionictuningtutorials/static/media/afr.c34a9c1f.png","c34a9c1f321c7008ef7f46c90dd5a9d5"],["/trionictuningtutorials/static/media/airm.58fbc64e.JPG","58fbc64e29d013b2430066c662ba5759"],["/trionictuningtutorials/static/media/bgb.7e60eaaf.png","7e60eaaf57da7a567c005b6424793e86"],["/trionictuningtutorials/static/media/fuel.c2c2fddf.JPG","c2c2fddf41aac56d88b23ecd44acd8dc"],["/trionictuningtutorials/static/media/manif.306474c5.JPG","306474c5b011aa8f34a551988c863c95"],["/trionictuningtutorials/static/media/map.6c322315.JPG","6c322315cdd03ff3a6ff019f178b00f1"],["/trionictuningtutorials/static/media/pwm.3782d074.JPG","3782d0742dd05b42856ea12abd132fc6"],["/trionictuningtutorials/static/media/s200sx.8ed3cc08.JPG","8ed3cc08e9826aa4934b81ed591410be"],["/trionictuningtutorials/static/media/twg.3f9c7271.JPG","3f9c7271f47ae0883f5f8856466f0b3d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var a="/trionictuningtutorials/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});