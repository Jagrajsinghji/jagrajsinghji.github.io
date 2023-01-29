'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b033bd954df20a9950567a156da45be1",
"index.html": "462df11dbe908051ca2840b05d0f9d69",
"/": "462df11dbe908051ca2840b05d0f9d69",
"main.dart.js": "2431806ee8df5807a810e8605d14e48c",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "ea4b32f466f9d7d0bde797d91604d181",
"icons/Icon-192.png": "ea4b32f466f9d7d0bde797d91604d181",
"icons/Icon-maskable-192.png": "ea4b32f466f9d7d0bde797d91604d181",
"icons/Icon-maskable-512.png": "726f89a5c94414b31a7c81c45de3c49f",
"icons/Icon-512.png": "726f89a5c94414b31a7c81c45de3c49f",
"manifest.json": "baeb2d61f60b70d9cb390a7cfcf08d2e",
".git/ORIG_HEAD": "eba4ac355a80f854350338ec5dce6ef4",
".git/config": "971dd2b12425f1073c3d29489ad90593",
".git/objects/68/38bfc748d0825a3fad2664313039fa8dd9019a": "e0861c7d1bc0f6512a51a6198518f729",
".git/objects/3b/d166495c1df2f5273ac9e7a23acb7fd11de052": "e37c24ca07a909339f7d109c9df494af",
".git/objects/6f/a65fcbad03c185efde0313b6f08852fc3d8213": "28e9ba20adeea19463794be1ca1d03c8",
".git/objects/6f/dc73c19444f2c4c8613effaddc9a8f62b6ba45": "286aa70f58afc423fc0a535bd2ba8f49",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/56/b7726e8ead4a18e730afd356c440a07da5c6de": "0de3daff24fe0f54700565c6902eef43",
".git/objects/56/17b8f29ea2a3bd830b67a6bdcf71109a68ec87": "82fe1c2e6135bc54168dea7539d01e6d",
".git/objects/0b/3a72a94bc721d26e97611fe388c734fec2d946": "156eff75ae8993c73db3955347b4bbc1",
".git/objects/93/c033711dcd36dd9a6679fbc7504fbfa8dffef9": "a9ab6297160025f23b1f795eca9ea573",
".git/objects/a3/4f5a181d8a0b041790104ec00fc5b151196703": "b05fd055905b24a1ba58fe85f584a0ef",
".git/objects/d9/fbc3b34428f99cf2aee6270cc9a60c81ed6c4f": "34bc15f1c5797d76d8aa2b46790d1faf",
".git/objects/bb/d81b4417162c6a0b05b677c3089504d08a1690": "15e6db1652bca6ea5814106f41a3c718",
".git/objects/d1/4e1d62849052e19775b4f4b80ccdfe0e7f34c2": "ffd79d87e1159c396a4cdcf0d68e691a",
".git/objects/ae/be0dfd9a9fa15d5336fea78e6c6bf3da55a567": "b389c5cd606ae8836a3c088e4d097576",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/a8b5f6a6dd9e67d2e0b9099c29d583c6d2e0ae": "8227f56e5919971cb226e497157a96fe",
".git/objects/c0/a860f0f8d3279961d20907841fd3405c9449ee": "afcb774c38528036e08e869076dc8f03",
".git/objects/c0/4472aded7c992b97503d029d71f18499a5ef4d": "2bb90955e03d2fed80b96786e5e710e4",
".git/objects/fd/865081aae934e514b7e5e5bf35d622587d4a14": "cfe219a54cecd7e334ac8215542d3d20",
".git/objects/e4/7b212d25477958d32b0b5ea1c92c5ef01b2074": "16b52b6d9fe7d0389dda67a6521827a7",
".git/objects/ed/ae43f5ec7c61a6aded518c4421700fadb5ea3c": "ecff61bf729693900fb43bc64cd33af4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/pack/pack-a294b14e4c59b56c1ea687fe71c672e8e1cde110.pack": "55c12fe49b638d89a9d3f331e55d3af8",
".git/objects/pack/pack-a294b14e4c59b56c1ea687fe71c672e8e1cde110.idx": "a0186ab4e421d1f386bdd2dd48c40426",
".git/objects/29/926178e42e46b753b51aec10f10f89dd433915": "4e94b23686787066698b8d3f616d6a57",
".git/objects/45/ddff034bf69f4dc9737d7e4e7b19ab77f40ebe": "f47bc107f2d2ecbcdc94af5fbf1a10bc",
".git/objects/1f/a7507415d48210962527afa7b84cac08d26075": "8fe3aa433ac25a377a6188092e6bc7d9",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/35ad43cb789ef7b46683f6c0b2d9c78439e109": "2acf780f0ccb0251e09782e30e0f6ace",
".git/objects/74/2e63c1967f8e270250a3ec177124076f2f803f": "79a182ee012847f66708f456641f6277",
".git/objects/28/cc7eeccbf109cc5a2fca12d7c5c342d11586b2": "cd956dffa7a4af2e37614c19d627556f",
".git/objects/8f/270941fa814c5ead0b0aff5e637aecf55f47c7": "4544e75a0c1b6ee325510154a455616b",
".git/objects/8f/92d7649604390f93b3c76c4e95efa75831a70c": "b9052b252e110db429a9b8886252004c",
".git/objects/8a/86d00757e8447fe3fe94ef6c39a874dbb91bfd": "c4f79f1092126fea4f90f7c2c690fe1c",
".git/objects/7e/b7629f5daf0efc19bf9daa809aaf746fd4e5b4": "22a0c40b3f9b23fcfbbdeded5c7ab2bc",
".git/objects/10/18b044b9ba263a3ed5f14b3838af87c22f2744": "c2cb76fa89ca6648e843d3fdbf3ea402",
".git/objects/86/831a71e23f211548aa608128d4a976e33fb925": "66462c9935b5fcb23f4286f510eb3bd7",
".git/objects/96/8db9a18ae9aec93dbdab7cb269462e91a683cf": "3c80d0c46f9bb2857f86432ae41fd36f",
".git/objects/96/8bbe44775209086c9c010d0e8f73a674f49ffb": "56239e62b1f92fa76f5ad9c65223f9ab",
".git/objects/3a/3385490819865e3d5e27281282165f1c0f36b3": "a5505f26c6b3eb0cdd864b72b56d0928",
".git/objects/98/bb3e2da810438c5fab0119dffe03462abf6b35": "df25e661e4fc60f2f473bf0dba450273",
".git/objects/37/78c06fd08bb79603008d1dbed948282d8e56b0": "acd2845a1574664245d7571ffee5be9f",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/ba/13269e99988869d097413afdf9c19bd4e9c3d2": "fbc89cf965597d656efa406a1eccd3dd",
".git/objects/aa/dee18f5d43d19735a14368ad56ce780b35a09e": "2f171d669b887f5d277c904a19e1ca6f",
".git/objects/aa/4da66ef6079b0740b1f1545d4014b985d5d674": "a800fbf186d0edd19861e54816c0b1bc",
".git/objects/db/c31d359cfc9646ede0eb64a7e655e2696a878c": "e1cb212f875ccfc622040df1fc6ffb4d",
".git/objects/a6/51278e43291704fed8d9ae9ad0aca0e3ccba5a": "eebf879ca8349c5f91e235a2feafdc12",
".git/objects/a1/81bb54d9ecf6d1b43dcd26c3c672e551415b03": "593a69d76ece48e7d7a0b11d6ef1da90",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/3521ac32702a378b5ca618b43f8771a519e6fb": "d7f1249bab92acb94f6e97e9fc0543af",
".git/objects/f9/6f1598989f14c287762e41412464876021c827": "b672f9ae54cd5265355e02b3a28f7f13",
".git/objects/e8/9182dcc6afd0456f2e4097c8691f6c84fa063f": "5873109f5b20d998bafa8fe79641b8ed",
".git/objects/ff/851911efa6884e928da92a7c57ce3777b78e58": "ea4b88a97513ed2707bf38c0323c67e9",
".git/objects/f8/22f01c0aeffd062252cd3ff40b526bab8520ca": "1ed283379606a53cdbdcc42818ac564e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/47c2a4f86007a50b2d39fbb84a511764d4a3a3": "e511b272a6f8de2ee64a23267b08b814",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/032c788beccf2cee06c6ed0a6213a673297fab": "6fd85edbffdd06ed87d5bb9746929778",
".git/objects/4f/2e5b39e9a32d8158ba06fc17efded8b39e19f1": "63024883e3c7fb30e1453b73c7a1ca78",
".git/objects/15/ae7aedf494e9415f4a09a3a6889e246ecdf65d": "547a0d209c7a740d8a63e3dae39b1b09",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/82/d31fa0f26ecf79c11abfa2817c52f76a6e620f": "183f666ba29aff68022acdf5049786a6",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/8b/1e9f9a81656a7e0e7bc0a23f8e1fdeb4fd03b8": "b4d4156d4d7e6e382dac1f8810dec321",
".git/objects/8e/4c2e61bff626de89f84b680c903bf1bc5c4b79": "5672706c2e2c98be6cacf090ed3f134c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d234513b8831a757c6d8635f87f1097",
".git/logs/refs/heads/dev": "96cf5f7a5a23bf4aab0d5df469d94595",
".git/logs/refs/heads/main": "7524311535e7188d714657ed0107ab88",
".git/logs/refs/remotes/origin/dev": "4b8c615908222a54346680cdb1f2df7d",
".git/logs/refs/remotes/origin/main": "e1e3016496256eb957a42b21c8f9e288",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/dev": "4f202ad8868f75adefac6f6557fffb27",
".git/refs/heads/main": "eba4ac355a80f854350338ec5dce6ef4",
".git/refs/remotes/origin/dev": "4f202ad8868f75adefac6f6557fffb27",
".git/refs/remotes/origin/main": "eba4ac355a80f854350338ec5dce6ef4",
".git/index": "e8fc839a153396cd674da8578a0f4ab8",
".git/COMMIT_EDITMSG": "7ad7bc3a61533da047db0d26c2b396d4",
".git/FETCH_HEAD": "18cf123b2af35ddb16e8b44f21a4fb79",
"assets/AssetManifest.json": "f677c913b5776d6d121ba49f9edb1a22",
"assets/NOTICES": "cbf8acb9a138a2ba3c3bb7f44febe34f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/stack-overflow-svgrepo-com.svg": "c37511bb993dcdebaaf0068dbc509f26",
"assets/assets/svg/email.svg": "568bbffbcb2e9e8e9b7ba040123d1e0f",
"assets/assets/svg/linkedin-svgrepo-com.svg": "13f582bcd2c27125a33ee05fc20d6c48",
"assets/assets/svg/github-svgrepo-com.svg": "c8948ccee0622f14b8c4c55775a99e43",
"assets/assets/svg/phone.svg": "9b91c41288edaef024062bc5dae474c4",
"assets/assets/svg/medium-icon-svgrepo-com.svg": "c4b42222e14916de1f31e72a49efd371",
"assets/assets/svg/twitter.svg": "b75b0fab1d6cc02db0ad644d1ab7f614",
"assets/assets/svg/insta.svg": "0e732f1cd3cbee670f997513406be46e",
"assets/assets/betaflux_logo.jpeg": "5b6da818f6fbf299ac1e6b0bd94fd9a4",
"assets/assets/journey.json": "6b492a06eced01b56ad6fb08128cab1a",
"assets/assets/weExpan_logo.jpeg": "4f32f9cb5666834ce08dba116c31251f",
"assets/assets/what_stand_me_out.json": "187b1223f0ac37c31b5ab05ee96db5f9",
"assets/assets/specso_logo.png": "11d92b16388bb47891e8194df69324c8",
"assets/assets/hyper_logo.svg": "ae7629d47ba7d6aa03f096030b5cdc57",
"assets/assets/spotlight.png": "bd65b1d455eb1aa4a80821d8321d677b",
"assets/assets/JS_logo.png": "94daed4481cc7876a7c6d1f8b1d1eea2",
"assets/assets/my_pic.png": "313b922357c9706cb522b03a29993a9e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
