'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b033bd954df20a9950567a156da45be1",
"index.html": "70d02e83cb0f484950869ab22c3a1146",
"/": "70d02e83cb0f484950869ab22c3a1146",
"main.dart.js": "2a027ddce6a35b8c0c4ce5164cdf8aa8",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "ea4b32f466f9d7d0bde797d91604d181",
"icons/Icon-192.png": "ea4b32f466f9d7d0bde797d91604d181",
"icons/Icon-maskable-192.png": "ea4b32f466f9d7d0bde797d91604d181",
"icons/Icon-maskable-512.png": "726f89a5c94414b31a7c81c45de3c49f",
"icons/Icon-512.png": "726f89a5c94414b31a7c81c45de3c49f",
"manifest.json": "baeb2d61f60b70d9cb390a7cfcf08d2e",
".git/ORIG_HEAD": "526d2b4246edd7b96fe27a1641315246",
".git/config": "80a286fc91b9b4ead8d1c13c329ff0bc",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/108d1702d00a6513dd38f5bc963c3f04c5985f": "5aa3c32acac76c5427e38ddf9b77766f",
".git/objects/92/104d50fb2a44199225eb2f7bcf00aa76d6f8d5": "5587af6b6fe83118fb0cb1784281b676",
".git/objects/66/76b45f4d66b9f2a7eebc39243c398f485eb2a8": "ad09062984cffa65708c753004ca8c15",
".git/objects/68/38bfc748d0825a3fad2664313039fa8dd9019a": "e0861c7d1bc0f6512a51a6198518f729",
".git/objects/03/b70d6af7e539d6e030ce3120ec4fa0925e646e": "5dfbaf9b0cb0b17fccbc9fea170daabc",
".git/objects/9b/ae6b57395925070ef73df427e0cfc780fbefe4": "ac95f550e012c136b5f08b713038021d",
".git/objects/9e/86a595f8c7af3dcc01683864f9e4a59af41a1b": "11e1e9f34fc7f281c22d8eae81b3b2f7",
".git/objects/04/c6637cfdb70c6a4ecf65df44993abfcbdbc974": "189d4049e78c542f12a077a3649557e6",
".git/objects/32/39f56cec9d6e3b3cf360b02af3c8b958310c23": "b4182e01aa97f0ce945f6161a8675644",
".git/objects/32/b3df59620409fcf31269a19438808adfc97d14": "3baea7c2437ad685857b9d8c8799ee9d",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/56/17b8f29ea2a3bd830b67a6bdcf71109a68ec87": "82fe1c2e6135bc54168dea7539d01e6d",
".git/objects/67/d1e723cfcd0e61f4d94be2b050cda7f48a72f3": "5d880fe9b3550446a5cf4f25e1a06705",
".git/objects/0b/3a72a94bc721d26e97611fe388c734fec2d946": "156eff75ae8993c73db3955347b4bbc1",
".git/objects/0b/8621a0cd55cc397a33f0af7a607a531346d0ac": "30b172e79eb8d0bedf0438eff0d3f98a",
".git/objects/93/c033711dcd36dd9a6679fbc7504fbfa8dffef9": "a9ab6297160025f23b1f795eca9ea573",
".git/objects/34/f4960a969e84f5da8a305c56e7aa6237f97eed": "22e32185b6f4bb16e5e22730267c6ea8",
".git/objects/05/e03bab284d50ba529cf0ec9367527c37d330f3": "9278a86ce6778c5334a81df9f3812a84",
".git/objects/9d/686719f5afdbc80a0d51bf3d1e7edac6ffc269": "1840d28e64531d917a72fca1d1deb858",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a4/c31cf6b81b8fe3c3a26249e6b0779c3fa3a8e7": "90c8f204b88b2d76cc1ad3945a3ec8df",
".git/objects/b5/cda36b36e4be85df1945c7c879a894b9a5e554": "3c468022a255f80449a7cda8539f3f45",
".git/objects/d9/fbc3b34428f99cf2aee6270cc9a60c81ed6c4f": "34bc15f1c5797d76d8aa2b46790d1faf",
".git/objects/d9/228fa288c28c09063d780abe6958b71baaf9e8": "7432fcde90d53dfc5568f2a195657b7f",
".git/objects/ac/88fa2b6c0ecb2059e411fda19a0bd8bd96413f": "839b54de4ae3c9f9a31ce126dd42311b",
".git/objects/d0/013c466272a2f458dcd13168e4b7f3877a4664": "ff4e05f31eb32e04ab00d365479c1ac4",
".git/objects/b3/3ec0891e03b8f89291b8f9a7bdd61ec6f882e1": "f83ce46699a4c4755a2f6c69f7a384cd",
".git/objects/df/e70f031b1996f4192ecc780f472f6bffe6751b": "d3dbe333ac97a9ffec7c5e9e0f25ae08",
".git/objects/a2/380c5ac69bcf41d20b53a7835813d824bd828d": "6cdcc9aa1c398266f28f16638771000a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/f3be66e131c39ba3275701f11ec15df4971b8f": "060183767ebf7474586296f8a9c5e34c",
".git/objects/ab/ce880f8931175fd394d3eaaa730310663458f5": "c57e172fabd640dd07fcf4a6cd40722c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/426372605a190427ef1670e90c6fc5848f7d69": "0ccdfc10a09c428152b67aab1912162e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/564b6644ae2be0475f99f08795b7d98749f394": "13896b62f38fe6de894f0374d9ce3a68",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a8b5f6a6dd9e67d2e0b9099c29d583c6d2e0ae": "8227f56e5919971cb226e497157a96fe",
".git/objects/c0/a860f0f8d3279961d20907841fd3405c9449ee": "afcb774c38528036e08e869076dc8f03",
".git/objects/fd/707ef880582346b36ebaffdba1283c76a997a4": "6bf001a4eaf39a229090a85c3589e238",
".git/objects/f2/85d7d7dc9a1f656e6430c075bcc41788f72059": "6469efadf85d91825518b5e43216502a",
".git/objects/f5/7c49293df10e0c31f8ad8954c4f07d4a078005": "60c8f07e8fc3c4b02203eeb53615a58c",
".git/objects/f5/793d1de479217b07306df1d3d78e34199b47a0": "ce1f161b4b2b26c9b04318429b92c063",
".git/objects/cf/55d72b84369e5bbbd0ec9c0cafd5e7a82e7668": "c95d22758c400c9e8ca318bd2aaa74c9",
".git/objects/e4/35a7532f581fa0169e8cee6461f578c3faeaa9": "996ae8d3bc2d4aef5dc059899ef14f07",
".git/objects/e4/f3e293ca6b963ab542aad5a023fd4944be2da1": "49ba83081eec4db5840f8537da533d71",
".git/objects/c8/0ac38cc1493f96b39533838523dfd5dd2942c2": "3fcdc5098988befe20f4a0218b70b377",
".git/objects/fb/2689bb82c1b58888f4841af1c4c284dc9f607d": "e53073e79423793529f016b402b0b983",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/664b53884bc2addbf638119cfec3bf4962050e": "1333840ddf9587b8917668ca072f93d3",
".git/objects/27/678f4badf8b04459b97f7bea56249e21670cdb": "1fdba087ac32a069d9b561cefc0c4bef",
".git/objects/11/b3085aab020c4548cbe99f7c4b0bbfecfecff1": "051156e6633e49073b59ff547e46b482",
".git/objects/29/926178e42e46b753b51aec10f10f89dd433915": "4e94b23686787066698b8d3f616d6a57",
".git/objects/45/ddff034bf69f4dc9737d7e4e7b19ab77f40ebe": "f47bc107f2d2ecbcdc94af5fbf1a10bc",
".git/objects/1f/a7507415d48210962527afa7b84cac08d26075": "8fe3aa433ac25a377a6188092e6bc7d9",
".git/objects/74/2e63c1967f8e270250a3ec177124076f2f803f": "79a182ee012847f66708f456641f6277",
".git/objects/74/b5e6a68b096964b7facc5a93e0c5c7b0220651": "b4ad904890580423d89b3a127debdea3",
".git/objects/1a/23f4be422f7b520702bb196b2611fd8bc7a6bd": "e5f4662aa9f63fa7d76a25c41edfe5db",
".git/objects/28/3730eca03d9ecd6196d8f98a9dce9cef694372": "dedf1d29eae70882569e58c15ae498fc",
".git/objects/17/820fda67a04efab334e43966eb7b8616f6cd53": "c0e18a14080a839ed6fead93f8e1aa5d",
".git/objects/8f/052755366b701be1907b731117677c129e5864": "266f9c1be433639b3a13707efd393b60",
".git/objects/8a/d5a4c80acf76f5fef2ec40f28688ead9364251": "ce71e7b90992b185e1922404b44f9ef7",
".git/objects/7e/b7629f5daf0efc19bf9daa809aaf746fd4e5b4": "22a0c40b3f9b23fcfbbdeded5c7ab2bc",
".git/objects/4c/b788cf415ca7c3a6175643ffd86ae29b54678b": "6acf7efd69eb7694af6d9ef442a950e8",
".git/objects/75/3ccfc477d3858a4f7a1f1d84db9777ecf17e37": "ad6573c53e6d3b1eeb8c7df0646d8ae0",
".git/objects/72/bff222cfc8454c25aeb93d21e44727c9da350d": "84228e09fc96ac8d15971e6abfee212a",
".git/objects/2f/97ba3490cedb0148aeb165f315ec0cd408fac7": "2ef3ba7ea800e25386d001e5ca18256f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/863ee9251a8f78800e93a2398bc845596033b7": "77ae61aed66a16cc4e47d47ad266b135",
".git/objects/91/83b6506bcf4cda2a1656a9e18dd4fe9e66a8e4": "b03c4ffb3e174617369aeef76a70f716",
".git/objects/65/eee550d09b16aaed9057ba6aa717244134316c": "586559c6e5d63d7b12c52d7735a8fe2f",
".git/objects/62/49bd5f3244b7def195204786736c6cb36fc915": "eba05ca1634900d6fd42ea58627ad3e7",
".git/objects/62/6721dbf81ae4e2543f1ddaee4b466c0e658c3c": "39930d18ed5032d0fd245e0d386348f0",
".git/objects/96/8db9a18ae9aec93dbdab7cb269462e91a683cf": "3c80d0c46f9bb2857f86432ae41fd36f",
".git/objects/98/bb3e2da810438c5fab0119dffe03462abf6b35": "df25e661e4fc60f2f473bf0dba450273",
".git/objects/6d/41acc2c4f1e14d29ea88b36dc7b08811b32e7f": "cd7ff5a3e7400072950a4201f0dd1dda",
".git/objects/99/991969d09d172875d94885a0c87ab5c2c8714c": "9ea5485867d082ab6775ef578369b3b7",
".git/objects/52/7e6434a3f18675a521728ce5208647416981e9": "e14c408c231d6eb8a7cd187e5f980ce7",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/0f/e0ee3d0693ecac2ef5fed74acffced23fd8aca": "273c8100cac27a697f44fde2ab130c19",
".git/objects/64/4276b71411961d8657db505bbc13cc87b99e5f": "cdcb427b637c1bdf82192143b572bc10",
".git/objects/bf/f1ea10635b00b362e12a3e1f82e890ee1aabd0": "4e0276a0aa6eeae1a0556c260e249e3e",
".git/objects/ba/13269e99988869d097413afdf9c19bd4e9c3d2": "fbc89cf965597d656efa406a1eccd3dd",
".git/objects/b1/e850d4c46ffc38f4ad187cf468749247407f66": "699687ddbffb9ab84136b57ae651f59c",
".git/objects/b6/4c3702534d144630d4c53b91bcf935379fa0dd": "d6d18a7dcab9960b5acb422811157808",
".git/objects/a9/ca047eecbfc9c757e898dd708a7e6f1cca691d": "252636b8ee9dcb5603132ea49789493a",
".git/objects/d2/a180a64bd46c1239fb253ede2165522103eb5c": "0593adc42a686e5ef765dc0188546b13",
".git/objects/aa/dee18f5d43d19735a14368ad56ce780b35a09e": "2f171d669b887f5d277c904a19e1ca6f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/38dd4a6410c041bdb69da221ef45b98c984fc2": "ad0c74e2048e2270f8aef4cf76629406",
".git/objects/db/c31d359cfc9646ede0eb64a7e655e2696a878c": "e1cb212f875ccfc622040df1fc6ffb4d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/b7a641297e4f84d9bb89caa56d363a9e0a0371": "9f5dc8579bcbc701f60affc120e733eb",
".git/objects/a6/d26933b8ab4b935bec01a46ba9b7b150e58792": "f6d7e8f509a8b8c8e73259d14711471d",
".git/objects/a6/51278e43291704fed8d9ae9ad0aca0e3ccba5a": "eebf879ca8349c5f91e235a2feafdc12",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/81bb54d9ecf6d1b43dcd26c3c672e551415b03": "593a69d76ece48e7d7a0b11d6ef1da90",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/ee1105a5e3d24be9e982e9d66b267110ffe981": "02ef522f7df0d3de7d71d9bfa950b512",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ea/d6e211cf32883ada1e3f5d8c3739e4b336803b": "b5c398a0bebd1046071bff213bf27e2e",
".git/objects/e1/2eba6ea861c7468f25fa9a023e501be17766c1": "b884cd95d268905b6d09d8113c824add",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/f2b02b595ac4d48b74c97ab69f79dac330642b": "f006585f759f94fe459c74a0548a6a23",
".git/objects/e8/9182dcc6afd0456f2e4097c8691f6c84fa063f": "5873109f5b20d998bafa8fe79641b8ed",
".git/objects/ff/2a8bcb3a5d07b0ef273020530b1dd39326f444": "a908ea0d04b1dc18b7dcdfdcfd9d53af",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/cb/2e9ec5324b1f2d0fc7a3051689a2150f90b825": "0d424c741617c904ab9a5bb1812944f3",
".git/objects/f8/22f01c0aeffd062252cd3ff40b526bab8520ca": "1ed283379606a53cdbdcc42818ac564e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/47c2a4f86007a50b2d39fbb84a511764d4a3a3": "e511b272a6f8de2ee64a23267b08b814",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/2326b1e5c6d956761d59b142b1c6203f4b7a2d": "331131a078ee49ae28d74c9c7cfc8464",
".git/objects/41/5e4c69c64e66a7862ba9e56017a6f8d32d2f14": "9ea7bc03502d4da61f7c6d55e4f487b4",
".git/objects/77/06dc9d8de0823a33702c6707320d413e1ee6dd": "f17a00016dffcdb7b3564b89beef9987",
".git/objects/70/502b0c1cefea4990f6d9179183cb2b13d06a96": "3edb2e551bb02f207676f66edf9d845f",
".git/objects/70/032c788beccf2cee06c6ed0a6213a673297fab": "6fd85edbffdd06ed87d5bb9746929778",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/15/ae7aedf494e9415f4a09a3a6889e246ecdf65d": "547a0d209c7a740d8a63e3dae39b1b09",
".git/objects/71/706df24b69eed1ba88fd91ac45c3a4a86ee10a": "a22e843f2d4ddfb101c9a6469f80fbda",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/40/b0e2b920b7b0e11556b8cd01ff3d54bbcab362": "1ef021e837edb68bbc0d8c00eeeb35e0",
".git/objects/13/b35b62fe60cd01c79ce4fce992b1d7f3a93495": "bf8ffa29557ad7ce051ec34e3e01c065",
".git/objects/7a/b8e84adb44ba0a46484419e6870733a71f4d71": "1724395742c2a76d47ef5ad6b2d1e4b0",
".git/objects/14/79cf420bb5f4de921d3c74dabda5640f158423": "890d1d99f065b69f3210375403b981e3",
".git/objects/8e/4c2e61bff626de89f84b680c903bf1bc5c4b79": "5672706c2e2c98be6cacf090ed3f134c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06146d851566ca441176fbc32c2ec313",
".git/logs/refs/heads/main": "bb830f5752bec95454070b3728576c3b",
".git/logs/refs/remotes/origin/main": "30aa7841a982333ebf1bddac08832129",
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
".git/refs/heads/main": "8b2ca019d43a44260f8cc182f1e46475",
".git/refs/remotes/origin/main": "8b2ca019d43a44260f8cc182f1e46475",
".git/index": "9a750ab09da8f5820def48be9132a2fb",
".git/COMMIT_EDITMSG": "1303eb6cd2c6034bffb357ed1871864f",
".git/FETCH_HEAD": "e59ecffa32c0f672473afc07d6a3588f",
"assets/AssetManifest.json": "a5b9d3343f843e853af175d031d0fe55",
"assets/NOTICES": "6819af13b9820640b2365513689c360f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
