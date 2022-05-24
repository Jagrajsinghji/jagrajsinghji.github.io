'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b033bd954df20a9950567a156da45be1",
"index.html": "21246337f0ca3f4787d97197fac8722e",
"/": "21246337f0ca3f4787d97197fac8722e",
"main.dart.js": "2c2ebbd22ceae4dd30ba553c545dc0fd",
"favicon.png": "13baa031e2f22cd5dfbadbe915fdb975",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "baeb2d61f60b70d9cb390a7cfcf08d2e",
".git/config": "1710fdb1dbaaf35364d87d712131d9c1",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/03/b70d6af7e539d6e030ce3120ec4fa0925e646e": "5dfbaf9b0cb0b17fccbc9fea170daabc",
".git/objects/04/c6637cfdb70c6a4ecf65df44993abfcbdbc974": "189d4049e78c542f12a077a3649557e6",
".git/objects/32/b3df59620409fcf31269a19438808adfc97d14": "3baea7c2437ad685857b9d8c8799ee9d",
".git/objects/0b/3a72a94bc721d26e97611fe388c734fec2d946": "156eff75ae8993c73db3955347b4bbc1",
".git/objects/34/f4960a969e84f5da8a305c56e7aa6237f97eed": "22e32185b6f4bb16e5e22730267c6ea8",
".git/objects/d9/228fa288c28c09063d780abe6958b71baaf9e8": "7432fcde90d53dfc5568f2a195657b7f",
".git/objects/ac/88fa2b6c0ecb2059e411fda19a0bd8bd96413f": "839b54de4ae3c9f9a31ce126dd42311b",
".git/objects/b3/3ec0891e03b8f89291b8f9a7bdd61ec6f882e1": "f83ce46699a4c4755a2f6c69f7a384cd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a8b5f6a6dd9e67d2e0b9099c29d583c6d2e0ae": "8227f56e5919971cb226e497157a96fe",
".git/objects/e4/35a7532f581fa0169e8cee6461f578c3faeaa9": "996ae8d3bc2d4aef5dc059899ef14f07",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/664b53884bc2addbf638119cfec3bf4962050e": "1333840ddf9587b8917668ca072f93d3",
".git/objects/27/678f4badf8b04459b97f7bea56249e21670cdb": "1fdba087ac32a069d9b561cefc0c4bef",
".git/objects/45/ddff034bf69f4dc9737d7e4e7b19ab77f40ebe": "f47bc107f2d2ecbcdc94af5fbf1a10bc",
".git/objects/1f/a7507415d48210962527afa7b84cac08d26075": "8fe3aa433ac25a377a6188092e6bc7d9",
".git/objects/74/b5e6a68b096964b7facc5a93e0c5c7b0220651": "b4ad904890580423d89b3a127debdea3",
".git/objects/28/3730eca03d9ecd6196d8f98a9dce9cef694372": "dedf1d29eae70882569e58c15ae498fc",
".git/objects/8a/d5a4c80acf76f5fef2ec40f28688ead9364251": "ce71e7b90992b185e1922404b44f9ef7",
".git/objects/4c/b788cf415ca7c3a6175643ffd86ae29b54678b": "6acf7efd69eb7694af6d9ef442a950e8",
".git/objects/72/bff222cfc8454c25aeb93d21e44727c9da350d": "84228e09fc96ac8d15971e6abfee212a",
".git/objects/2f/97ba3490cedb0148aeb165f315ec0cd408fac7": "2ef3ba7ea800e25386d001e5ca18256f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/83b6506bcf4cda2a1656a9e18dd4fe9e66a8e4": "b03c4ffb3e174617369aeef76a70f716",
".git/objects/98/bb3e2da810438c5fab0119dffe03462abf6b35": "df25e661e4fc60f2f473bf0dba450273",
".git/objects/6d/41acc2c4f1e14d29ea88b36dc7b08811b32e7f": "cd7ff5a3e7400072950a4201f0dd1dda",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/64/4276b71411961d8657db505bbc13cc87b99e5f": "cdcb427b637c1bdf82192143b572bc10",
".git/objects/bf/f1ea10635b00b362e12a3e1f82e890ee1aabd0": "4e0276a0aa6eeae1a0556c260e249e3e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c31d359cfc9646ede0eb64a7e655e2696a878c": "e1cb212f875ccfc622040df1fc6ffb4d",
".git/objects/de/b7a641297e4f84d9bb89caa56d363a9e0a0371": "9f5dc8579bcbc701f60affc120e733eb",
".git/objects/a6/d26933b8ab4b935bec01a46ba9b7b150e58792": "f6d7e8f509a8b8c8e73259d14711471d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/2326b1e5c6d956761d59b142b1c6203f4b7a2d": "331131a078ee49ae28d74c9c7cfc8464",
".git/objects/77/06dc9d8de0823a33702c6707320d413e1ee6dd": "f17a00016dffcdb7b3564b89beef9987",
".git/objects/70/032c788beccf2cee06c6ed0a6213a673297fab": "6fd85edbffdd06ed87d5bb9746929778",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/7a/b8e84adb44ba0a46484419e6870733a71f4d71": "1724395742c2a76d47ef5ad6b2d1e4b0",
".git/objects/14/79cf420bb5f4de921d3c74dabda5640f158423": "890d1d99f065b69f3210375403b981e3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "938de39f2916e71355c4dbcee796f584",
".git/logs/refs/heads/main": "9da78295357950696651a1216108cbcb",
".git/logs/refs/remotes/origin/main": "94a179ce3e654f3089289ed436657be4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2fb502eb410d9611a7bbccc336c4f4ec",
".git/refs/remotes/origin/main": "2fb502eb410d9611a7bbccc336c4f4ec",
".git/index": "6ffd50e84ca7c2959e450ef0047993b6",
".git/COMMIT_EDITMSG": "af432864aeb56e74f304485e015ea03b",
".git/FETCH_HEAD": "e59ecffa32c0f672473afc07d6a3588f",
"assets/AssetManifest.json": "2185245a46f886b45a352a3939e87e04",
"assets/NOTICES": "63ea6a33e9dc4c7a6b6c27a2838067b6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/svg/stack-overflow-svgrepo-com.svg": "c37511bb993dcdebaaf0068dbc509f26",
"assets/assets/svg/email.svg": "568bbffbcb2e9e8e9b7ba040123d1e0f",
"assets/assets/svg/linkedin-svgrepo-com.svg": "13f582bcd2c27125a33ee05fc20d6c48",
"assets/assets/svg/github-svgrepo-com.svg": "c8948ccee0622f14b8c4c55775a99e43",
"assets/assets/svg/phone.svg": "9b91c41288edaef024062bc5dae474c4",
"assets/assets/svg/medium-icon-svgrepo-com.svg": "c4b42222e14916de1f31e72a49efd371",
"assets/assets/svg/twitter.svg": "b75b0fab1d6cc02db0ad644d1ab7f614",
"assets/assets/svg/insta.svg": "0e732f1cd3cbee670f997513406be46e",
"assets/assets/sikh_icon.png": "13baa031e2f22cd5dfbadbe915fdb975",
"assets/assets/laptop_wave.png": "2601655229e93c63c9f7a186120561b8",
"assets/assets/urOs.png": "1ecc9e5f48c2767efdbf4c255a48ae46",
"assets/assets/betaflux_logo.jpeg": "5b6da818f6fbf299ac1e6b0bd94fd9a4",
"assets/assets/journey.json": "6b492a06eced01b56ad6fb08128cab1a",
"assets/assets/weExpan_logo.jpeg": "4f32f9cb5666834ce08dba116c31251f",
"assets/assets/what_stand_me_out.json": "187b1223f0ac37c31b5ab05ee96db5f9",
"assets/assets/specso_logo.png": "11d92b16388bb47891e8194df69324c8",
"assets/assets/hyper_logo.svg": "ae7629d47ba7d6aa03f096030b5cdc57",
"assets/assets/my_pic.jpeg": "9de7ac615763753792125f8da359a7da",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
