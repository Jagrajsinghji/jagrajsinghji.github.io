'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e139e41c4e188d03948e4cb0bc068297",
"version.json": "b033bd954df20a9950567a156da45be1",
"index.html": "d5c5316669d5b2c9733757177d63957f",
"/": "d5c5316669d5b2c9733757177d63957f",
"main.dart.js": "e6e99f59008620c44ecfe9b4effe3288",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "ea4b32f466f9d7d0bde797d91604d181",
"icons/Icon-192.png": "ea4b32f466f9d7d0bde797d91604d181",
"icons/Icon-maskable-192.png": "ea4b32f466f9d7d0bde797d91604d181",
"icons/Icon-maskable-512.png": "726f89a5c94414b31a7c81c45de3c49f",
"icons/Icon-512.png": "726f89a5c94414b31a7c81c45de3c49f",
"manifest.json": "baeb2d61f60b70d9cb390a7cfcf08d2e",
"assets/AssetManifest.json": "d3f1b08527a8dd2f804741dab05f4086",
"assets/NOTICES": "a95a66c40f1ed08cfc13c6b6c63ad5bb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "330fb38d7ef27c3640c5f2ca9c08ecac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "37d6ffafface6946a05078961daeeeb0",
"assets/fonts/MaterialIcons-Regular.otf": "2c8b6865a5c6e65b6dd33efe6cbccb61",
"assets/assets/svg/appstore.svg": "fdabfe2454168f46f347de05ad0bec63",
"assets/assets/svg/stack-overflow-svgrepo-com.svg": "c37511bb993dcdebaaf0068dbc509f26",
"assets/assets/svg/email.svg": "568bbffbcb2e9e8e9b7ba040123d1e0f",
"assets/assets/svg/org_svg/ims.svg": "b06180192ca07da97cb6ce08834d527c",
"assets/assets/svg/org_svg/betaflux.svg": "9466f873434e7d2a93e336b3d3c42147",
"assets/assets/svg/org_svg/weotto.svg": "f7f1280e5f36c592b85301a5cbc828d4",
"assets/assets/svg/org_svg/specso.svg": "95f87850b16779f1f230463fbf717a90",
"assets/assets/svg/org_svg/immortal.svg": "f42b61269799fb3c22a7341c4343a648",
"assets/assets/svg/org_svg/hyper.svg": "ae7629d47ba7d6aa03f096030b5cdc57",
"assets/assets/svg/org_svg/weexpan.svg": "1a392cfb318205c746ea5047a32a4eda",
"assets/assets/svg/linkedin-svgrepo-com.svg": "13f582bcd2c27125a33ee05fc20d6c48",
"assets/assets/svg/github-svgrepo-com.svg": "c8948ccee0622f14b8c4c55775a99e43",
"assets/assets/svg/playstore.svg": "bd8f2843df647e82df054df459b65bb1",
"assets/assets/svg/phone.svg": "9b91c41288edaef024062bc5dae474c4",
"assets/assets/svg/medium-icon-svgrepo-com.svg": "c4b42222e14916de1f31e72a49efd371",
"assets/assets/svg/twitter.svg": "b75b0fab1d6cc02db0ad644d1ab7f614",
"assets/assets/svg/insta.svg": "0e732f1cd3cbee670f997513406be46e",
"assets/assets/projects/apparel_marketplace.png": "40c67aef07c5065f762faa40c4b24179",
"assets/assets/projects/sikhnotes.jpg": "43a1a87d9acc1267d0809736d4ca1e5f",
"assets/assets/projects/studentsync.png": "aa87856d3420e359a3559b8627668e61",
"assets/assets/journey.json": "6b492a06eced01b56ad6fb08128cab1a",
"assets/assets/JS_logo.png": "94daed4481cc7876a7c6d1f8b1d1eea2",
"assets/assets/profile_nobg.png": "d04b8cba160c8460a951d7b6402ed605",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
