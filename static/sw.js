importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/0.73be887d7f77100d284a.js",
    "revision": "b2308f81e032aac024a62a893ff023a6"
  },
  {
    "url": "/_nuxt/10.a7d6d13acd58344470f6.js",
    "revision": "e25f37c3af601f762609ca0f4efe43e6"
  },
  {
    "url": "/_nuxt/100.067fa9a68f51720a6244.js",
    "revision": "0c8008da88c74277e39034bd84cfa6c8"
  },
  {
    "url": "/_nuxt/101.c69303566312f0286fd3.js",
    "revision": "f7749e10a560331974c14561b48b7598"
  },
  {
    "url": "/_nuxt/102.cf236988ad3bf55fe488.js",
    "revision": "f85c838c560930cb477c25d48bf89a22"
  },
  {
    "url": "/_nuxt/103.12730586f229d13c1918.js",
    "revision": "0caa8a04d07cb80eed42c92bd92861f7"
  },
  {
    "url": "/_nuxt/104.bebe80c0ca3f4e447734.js",
    "revision": "edce50069cfe48dca14f8d930fc9ffe2"
  },
  {
    "url": "/_nuxt/105.1b78f4d28210b36049bb.js",
    "revision": "6d23c2d562a98ae938fcc0b2afc9b0c7"
  },
  {
    "url": "/_nuxt/106.fde25364256b1b9fdb81.js",
    "revision": "17ff212d342c6b503349f41b58441c98"
  },
  {
    "url": "/_nuxt/107.75b1144ed2ad6f511891.js",
    "revision": "6f41696fd5d4822d9b68df65bec60443"
  },
  {
    "url": "/_nuxt/108.fbf321c194200b74cbd3.js",
    "revision": "8845f0ca40b030fb5b288e57a3176dd0"
  },
  {
    "url": "/_nuxt/109.2676d56f983c0998b9e6.js",
    "revision": "3236d07083b3d55b729c1cbabc537ffc"
  },
  {
    "url": "/_nuxt/11.7ac38b04c81c358e2f69.js",
    "revision": "111f4cd2782b041db98ccf442481a038"
  },
  {
    "url": "/_nuxt/110.42d7db726b3d4ed7ee65.js",
    "revision": "931ccbe6528df62fd47332d346ec9cce"
  },
  {
    "url": "/_nuxt/111.b692cb09d6384a2a1a9d.js",
    "revision": "8f38fcf4f88e687acc7051044031b0f3"
  },
  {
    "url": "/_nuxt/112.642d811b5d733cf1f983.js",
    "revision": "a02f326cd9272181e2eee0c5a46afcb2"
  },
  {
    "url": "/_nuxt/113.725800e543e7514e0184.js",
    "revision": "ed3e74485c452282ecf1d5bb82b237b1"
  },
  {
    "url": "/_nuxt/114.9118234b3f25fda2d6d6.js",
    "revision": "3e3af13bc23262ae1caa661dd5a8157b"
  },
  {
    "url": "/_nuxt/115.fafd4fbd39c0ea633154.js",
    "revision": "706fa991b6ec724d6aa12918ea07a024"
  },
  {
    "url": "/_nuxt/116.3fa4a3dcdba0983fb131.js",
    "revision": "0356295d68c8cf8eac7991866f81abdd"
  },
  {
    "url": "/_nuxt/117.247c4a84ef1ed178c07a.js",
    "revision": "597afa95e5cf251e2f9d6603fd509888"
  },
  {
    "url": "/_nuxt/118.bf9889fe6ae0eeac1637.js",
    "revision": "b2d413201c34eb241f9d9e67c0ad89ec"
  },
  {
    "url": "/_nuxt/12.b1727c32edb70788e7f8.js",
    "revision": "283dabff42b663b59e512812c9ac7b23"
  },
  {
    "url": "/_nuxt/13.44401b7e004e4711fb38.js",
    "revision": "dc8fbe4f72c8fb0ff226ee223d3857ab"
  },
  {
    "url": "/_nuxt/14.c1dd166cfafbf90fc2fd.js",
    "revision": "6208d1b8200c436a381938bd36cb8e39"
  },
  {
    "url": "/_nuxt/15.dd551a8c9b0a30de97cd.js",
    "revision": "a1f8597e187b8cbac67dec6bc3aeb0cf"
  },
  {
    "url": "/_nuxt/16.2342efd59e297d3b7dbf.js",
    "revision": "f2c85d6f095573a0688d4b66ef4c517b"
  },
  {
    "url": "/_nuxt/17.70b2f769c9e159d78955.js",
    "revision": "fb6dc835c33da1966d80c34a6f15355a"
  },
  {
    "url": "/_nuxt/18.b4c44f5b5f59a747de01.js",
    "revision": "b818793d5cbb29d7a907502dce1c12ee"
  },
  {
    "url": "/_nuxt/19.de46752eba7bbd6105af.js",
    "revision": "2c5d1eda3d19bb4bfafdf7ac7792e8f6"
  },
  {
    "url": "/_nuxt/2.ed4040f90f32dd70d6d7.js",
    "revision": "2e71fc4c98d327b3f91347ce142a80c4"
  },
  {
    "url": "/_nuxt/20.12cd90d4df812119fb95.js",
    "revision": "965249705b32dd4db6c37538d9c9e4fa"
  },
  {
    "url": "/_nuxt/21.ed49319eb5a84d6755ef.js",
    "revision": "26e621b1c69e22ed65a24718ea6e18ad"
  },
  {
    "url": "/_nuxt/22.042636d8246baa352389.js",
    "revision": "34e61b01b286e85191957e3347fad1eb"
  },
  {
    "url": "/_nuxt/23.8baa1f3b750e56ac1240.js",
    "revision": "f71e7f32fd3fe96c6710de34a68d195e"
  },
  {
    "url": "/_nuxt/24.edd2a882a158d8f7e02c.js",
    "revision": "539324caa4bef84ed7efef04985997a0"
  },
  {
    "url": "/_nuxt/25.14d1401d31b232fdf8ee.js",
    "revision": "e1009983d925840f309e4c9d19224ecb"
  },
  {
    "url": "/_nuxt/26.29fca7a48370847c12ac.js",
    "revision": "33161168f4c2d1b264bdce1c157d56e0"
  },
  {
    "url": "/_nuxt/27.a0f5b4b64cdb3807dfd8.js",
    "revision": "74c896e5d4be1a2bc801be71663a0d09"
  },
  {
    "url": "/_nuxt/28.045cdb74a6bdf9edc081.js",
    "revision": "7941448f56f1cb88ec0e0bd7c635cf35"
  },
  {
    "url": "/_nuxt/29.10456fce72d961103f7f.js",
    "revision": "7d65ebccdcc9bc1fb9101394fb48ef51"
  },
  {
    "url": "/_nuxt/30.811b36320b4f0ab6661b.js",
    "revision": "0fca6b78f210f0f3d1ef6b9eb0ea8c67"
  },
  {
    "url": "/_nuxt/31.d1978600eec7775aa432.js",
    "revision": "c4e9750b740f40a7feb6ecbee21f2ceb"
  },
  {
    "url": "/_nuxt/32.52c61ebc6dd9de483fb3.js",
    "revision": "0520f36405f9d4b86a8af98277a30d36"
  },
  {
    "url": "/_nuxt/33.d822f668476859df667a.js",
    "revision": "13c8529955c22d1d96990dd002bf7d5b"
  },
  {
    "url": "/_nuxt/34.296e7e35459ba4b55a40.js",
    "revision": "38d76263012b9049d3cf9341fd600d66"
  },
  {
    "url": "/_nuxt/35.82ddb72da9370d2dcd21.js",
    "revision": "37f9ac02ce3bd8bea78910df3ecea925"
  },
  {
    "url": "/_nuxt/36.c1f14f6b315767e53862.js",
    "revision": "16c35fbc2fac5288d10b5c7003991bb8"
  },
  {
    "url": "/_nuxt/37.97fc7f4aaf4ef02f61af.js",
    "revision": "99bb1bf349d4b5d610dfe77794298a9a"
  },
  {
    "url": "/_nuxt/38.9bae3c5ce77219a21acf.js",
    "revision": "99e053d18d6da50606d13ae17c02183c"
  },
  {
    "url": "/_nuxt/39.d78311cb276724f013c8.js",
    "revision": "5ace659963ad698c10cafdb45e61c85f"
  },
  {
    "url": "/_nuxt/4.b5ac7419f8c3281c7e3b.js",
    "revision": "7f586bf0c6dd14271001cfd3ef1ab1c7"
  },
  {
    "url": "/_nuxt/40.3381451060426d095b77.js",
    "revision": "5f590f0792f734ae578d8d218a7ed2b3"
  },
  {
    "url": "/_nuxt/41.162fb3d3141029db9f88.js",
    "revision": "708db5b8cd7bc76a96750db5d6f8cf48"
  },
  {
    "url": "/_nuxt/42.d95ebfb300d009ad8c71.js",
    "revision": "c7c53eed98a6d62612fc89660bc76637"
  },
  {
    "url": "/_nuxt/43.c59e7b3f29c33b18f46a.js",
    "revision": "972939d11c0cf56a19259942e7e0bf67"
  },
  {
    "url": "/_nuxt/44.e93bfb80c1bd05b06fd8.js",
    "revision": "da0e0cfd1250b3c22c1dfd56e96988c2"
  },
  {
    "url": "/_nuxt/45.7a88ef25fc704ee35190.js",
    "revision": "bcf8dde8108c57e0d165f85bac75946b"
  },
  {
    "url": "/_nuxt/46.f9ab9a6c9eecebe056ee.js",
    "revision": "4f17c032d3366c2bf144a4dc944230cb"
  },
  {
    "url": "/_nuxt/47.1e737eef26e35fa94f47.js",
    "revision": "2febf3b335505eaef160ec406b8436a1"
  },
  {
    "url": "/_nuxt/48.51c4ac6995579493bbbe.js",
    "revision": "5cd37ab33cbb73968ad7d2ce1ed7947d"
  },
  {
    "url": "/_nuxt/49.fefd1cc5b0810ef52123.js",
    "revision": "f8a38f127b8b6169dca6d30adf01b874"
  },
  {
    "url": "/_nuxt/50.98c7821c3cdaa18a3a7d.js",
    "revision": "82fa76df198db40e179945ee0c164692"
  },
  {
    "url": "/_nuxt/51.1aaf60ba555a6e394531.js",
    "revision": "bc28ec1b81f72fdadd6d5a03b8999f16"
  },
  {
    "url": "/_nuxt/52.779540370379ad4f826a.js",
    "revision": "953dee889c3a561c89f06bb856da3aff"
  },
  {
    "url": "/_nuxt/53.9d138e776feb7789dc2a.js",
    "revision": "72a77109c46400f90193ec5bea53e663"
  },
  {
    "url": "/_nuxt/54.897fa189e7d9810a5774.js",
    "revision": "a54986681df961a81a2ebf36e09ba7a2"
  },
  {
    "url": "/_nuxt/55.243f2564f78c0b43f179.js",
    "revision": "a22d98088d4ac4a36bd3919d33bcccb3"
  },
  {
    "url": "/_nuxt/56.85ed4e979b5798547f8b.js",
    "revision": "e29a1f344c4f61a1e5846a2bed9921e7"
  },
  {
    "url": "/_nuxt/57.392cdcca54cb3b135f07.js",
    "revision": "4daa1402888a67e5d9af84cdaf642c35"
  },
  {
    "url": "/_nuxt/58.809b8098bee0a5d54b58.js",
    "revision": "c6d79f4c183bbf8a2051217c8bec3895"
  },
  {
    "url": "/_nuxt/59.53f100465dae5cd99177.js",
    "revision": "d9897a432061869c0e8195d989baba29"
  },
  {
    "url": "/_nuxt/60.154ae886592f3040a95e.js",
    "revision": "b5afdf2dbcd19768bf2c274ac415e226"
  },
  {
    "url": "/_nuxt/61.6dc38ddd6bb9e65e1861.js",
    "revision": "037b590572467122c5f49f7559b72271"
  },
  {
    "url": "/_nuxt/62.3f8994aacda9e4514c75.js",
    "revision": "89378ba12e177ee52124aea10d58e2eb"
  },
  {
    "url": "/_nuxt/63.2fc682dbe1eec62c90c9.js",
    "revision": "700b51ed7c2d1c0f497e0cef73d8e4c0"
  },
  {
    "url": "/_nuxt/64.a6c40f3483e323e94c5e.js",
    "revision": "5e80562b6174e5bfb65c5779788e1505"
  },
  {
    "url": "/_nuxt/65.187e822dc1a0ad26c2e0.js",
    "revision": "6cf71998156d84bd15ce174b4bed4a20"
  },
  {
    "url": "/_nuxt/66.31135ea85b57d410785d.js",
    "revision": "018d2ddd35396201573aef4f6e0015f9"
  },
  {
    "url": "/_nuxt/67.f50999928d5cde39c2e1.js",
    "revision": "34cfdadcc4ea0055653de913a9fa71ef"
  },
  {
    "url": "/_nuxt/68.592d0c7e130613cf67fb.js",
    "revision": "02113191a75155006a29265faeca95cb"
  },
  {
    "url": "/_nuxt/69.96a39399bfe4b709dd5c.js",
    "revision": "d9da739fb7f85ead5ce0ad2d2ba7288b"
  },
  {
    "url": "/_nuxt/70.3cdb82c05dbebfb6028d.js",
    "revision": "3ecf0ea0726d6f77a76bc31862b812f0"
  },
  {
    "url": "/_nuxt/71.7bef828e10662d01d560.js",
    "revision": "0dfb75507a370cc652ce53f3d53c9dc2"
  },
  {
    "url": "/_nuxt/72.4ee1b420974fd5f455f2.js",
    "revision": "c5637b3d79dcd90316090228bb2305b2"
  },
  {
    "url": "/_nuxt/73.bd92ec0f799092191af4.js",
    "revision": "dd669060667eb57eafda85e696589916"
  },
  {
    "url": "/_nuxt/74.9b2b3e72e304211de50e.js",
    "revision": "259e69c29b35bfcf47febeb342575a14"
  },
  {
    "url": "/_nuxt/75.4988c02bb5c44b05261d.js",
    "revision": "a3cbd4d1ab42543970bf762e1778196c"
  },
  {
    "url": "/_nuxt/76.fa7bd5325a001a1b1f40.js",
    "revision": "693dd8f3c0344efdbba9188b38927d29"
  },
  {
    "url": "/_nuxt/77.fc2910b5a23aa0c8bad6.js",
    "revision": "a83768c2cfd97f69dd7218eacd1dedef"
  },
  {
    "url": "/_nuxt/78.32bb51cc6de8c71e2201.js",
    "revision": "3b1cd85632ae6f0c35ea84190ce356df"
  },
  {
    "url": "/_nuxt/79.34b08a409f58fe8edc13.js",
    "revision": "572e08a546e5b591165d20936bf82788"
  },
  {
    "url": "/_nuxt/80.7c0c826d4d2f10546020.js",
    "revision": "69c62fa3575b5c2b42e81ea09e7418f0"
  },
  {
    "url": "/_nuxt/81.5feacc219cbd0c6ee9bd.js",
    "revision": "3202aa66de48d6b9b3e83f02403be4f3"
  },
  {
    "url": "/_nuxt/82.fe57b5027e572607f87e.js",
    "revision": "ed785c978276bf787291c464e07d44a9"
  },
  {
    "url": "/_nuxt/83.49d23ed5cda02df89938.js",
    "revision": "65872db1772b140ffdbd8c8c65927c7e"
  },
  {
    "url": "/_nuxt/84.c970e6e69a3c3a698a8a.js",
    "revision": "dc9876110b5fe97ce335dc72d942fb72"
  },
  {
    "url": "/_nuxt/85.bab6995241c6ad8c1964.js",
    "revision": "66666388261f04b3103826ec9ffe84a6"
  },
  {
    "url": "/_nuxt/86.21181ad8295c216a59db.js",
    "revision": "1eb3b10bbe72d8e796417bb2895b240f"
  },
  {
    "url": "/_nuxt/87.a636f4e7c856052ffef4.js",
    "revision": "60290c86d2e8266a9985c42f201f7b14"
  },
  {
    "url": "/_nuxt/88.09fae4f0bf260704d089.js",
    "revision": "fb79f4d9ee9c48b2e44d795dc37dc09a"
  },
  {
    "url": "/_nuxt/89.4eae85aa15829924550d.js",
    "revision": "db1354f87b34c23de8a4c119f78f063a"
  },
  {
    "url": "/_nuxt/90.468f27554b0d26a64d98.js",
    "revision": "2d60f54625cf95c1a7dbb0d27f65709c"
  },
  {
    "url": "/_nuxt/91.56275deba02251c7949f.js",
    "revision": "280b798231679b8e8e8cf6438287829b"
  },
  {
    "url": "/_nuxt/92.6be513ba28dbdaadc19a.js",
    "revision": "3d1cfcca5b71f5180dacac91379128d2"
  },
  {
    "url": "/_nuxt/93.4dc78cf86aa61ff5e82f.js",
    "revision": "8f4477bb183df9d53d0c1dd2a58a2472"
  },
  {
    "url": "/_nuxt/94.5b66bc45022e021ebde5.js",
    "revision": "e9596ec96f72f53b75d1ae8461b50706"
  },
  {
    "url": "/_nuxt/95.e4789bf52bc9c3e87ad6.js",
    "revision": "4e1083df976686f35b0481e8a3fb3d70"
  },
  {
    "url": "/_nuxt/96.376534994de3cef00aa7.js",
    "revision": "40d92b03d76169a6bbf9e06cabcc70a9"
  },
  {
    "url": "/_nuxt/97.6ca11e507b951aff3079.js",
    "revision": "c5b1d2606f212b6e01df38413490a6e8"
  },
  {
    "url": "/_nuxt/98.3f3ee33076f0d0eb0453.js",
    "revision": "3df2febcdfa7f41497be2800038a2398"
  },
  {
    "url": "/_nuxt/99.f21ea457310e79733d87.js",
    "revision": "26330d140fbfe698a8a66aee080b7d95"
  },
  {
    "url": "/_nuxt/commons.343d3747c068a8cb956f.js",
    "revision": "1b54be46984d172d242137271ee64e0a"
  },
  {
    "url": "/_nuxt/main.2f1c4c858ef61a9fb522.css",
    "revision": "2aeb0cb4ba8157b6016a1224838b125f"
  },
  {
    "url": "/_nuxt/main.f45e486b6ae2cd3777c1.js",
    "revision": "f66e8b8da1bbf116c27a9e1ba82515e6"
  },
  {
    "url": "/_nuxt/pages/Changelog.8e87710c3ea514d59a5a.js",
    "revision": "89f02cacab11669dc81f5a93d5864259"
  },
  {
    "url": "/_nuxt/pages/documentation.bac0801c480f4dde1da9.js",
    "revision": "31704e2b905dc02f195a270389a367d2"
  },
  {
    "url": "/_nuxt/pages/Download.47b402b2803c20be5529.js",
    "revision": "6d64e1e9d90470ca7efd9a676033c751"
  },
  {
    "url": "/_nuxt/pages/index.e9f222ddd30801f2fcd1.js",
    "revision": "1674a4d16436492d19268e22678c072e"
  },
  {
    "url": "/_nuxt/pages/Pro.a35104e4b2fc2719d01d.js",
    "revision": "f853ba35bc09e56ddc84c8f65b81b62d"
  },
  {
    "url": "/_nuxt/vendors.main.897ca8c42b4404bc0486.js",
    "revision": "aed0ef52d0fbc54e95208ce08a3c0b43"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

