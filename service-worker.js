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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "28820346935bc80a5f87c946ac45aef8"
  },
  {
    "url": "assets/css/0.styles.25c602b9.css",
    "revision": "078c882b2f0ca813d99e3dfa783aa02c"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/不学啦.jpg",
    "revision": "1d0c3ea447aed77a8a013c60ed32c7a9"
  },
  {
    "url": "assets/img/不当太刀高手了.jpg",
    "revision": "21234e69a73381b16716e1691815185d"
  },
  {
    "url": "assets/img/写前端写的.jpg",
    "revision": "230475e458abae79c027e6c79ccb2cd4"
  },
  {
    "url": "assets/img/太刀高手.jpg",
    "revision": "fc7669ebd90dd12e70f358fca5968fcb"
  },
  {
    "url": "assets/img/寄了.jpg",
    "revision": "24b432545c7107653040632babb6e83c"
  },
  {
    "url": "assets/img/我不知道.jpg",
    "revision": "f115809a8f39ffcf21c1835e5574d63b"
  },
  {
    "url": "assets/img/我好菜.jpg",
    "revision": "6895d36c5c908f96907abc320efd720d"
  },
  {
    "url": "assets/img/我是fw.jpg",
    "revision": "6b6a0588daf113ef1951a3730c050ad1"
  },
  {
    "url": "assets/img/我的钱钱没有了.jpg",
    "revision": "7cfc303811e9b1302c5ebb98e02f1af2"
  },
  {
    "url": "assets/img/没打过.jpg",
    "revision": "e513a3ccf38d19135e87f85cb2207576"
  },
  {
    "url": "assets/img/猫猫无语.jpg",
    "revision": "7e064e2841e804edbcb043eb306d775f"
  },
  {
    "url": "assets/img/生气.jpg",
    "revision": "2564baec5c16625a97af6a3a030940b4"
  },
  {
    "url": "assets/img/红眼大狮子.jpg",
    "revision": "38cbc196c17968213605b2f29937d35d"
  },
  {
    "url": "assets/js/1.c84b4e08.js",
    "revision": "2bebf55d05d9dcd0ada42f38b1aefa4a"
  },
  {
    "url": "assets/js/10.2bef1330.js",
    "revision": "f43c7a085e0b5105048d45d2179d91a3"
  },
  {
    "url": "assets/js/11.cc4e60f8.js",
    "revision": "6c73ecdf22cc22dfab8e8b41dc371452"
  },
  {
    "url": "assets/js/12.34fb96ee.js",
    "revision": "499acbfb59341ba845e4d424f90fdd48"
  },
  {
    "url": "assets/js/13.3ac49727.js",
    "revision": "eb8672fc36f13ff30343676101739305"
  },
  {
    "url": "assets/js/14.7c138049.js",
    "revision": "5179dfbab85f7e75f6b1296aafda67f9"
  },
  {
    "url": "assets/js/15.bc44d809.js",
    "revision": "90f235eb73891b1d82e04535a65a56c1"
  },
  {
    "url": "assets/js/16.40833728.js",
    "revision": "06e2c009ab67323d5067dea6cc009b5f"
  },
  {
    "url": "assets/js/17.da9e201c.js",
    "revision": "117f7feb0e073908307bace965dd1cf2"
  },
  {
    "url": "assets/js/18.1598143f.js",
    "revision": "8d193128b6d34ecd505c609361c1e06c"
  },
  {
    "url": "assets/js/19.066c62b0.js",
    "revision": "6ae158df5ab98e0f033317f9fe7a0abf"
  },
  {
    "url": "assets/js/2.914d04d1.js",
    "revision": "dc6f3f5b9a5d696c109ac358859c131f"
  },
  {
    "url": "assets/js/20.29e5f94b.js",
    "revision": "a4235d47e0d40626d6711769d4bb9c02"
  },
  {
    "url": "assets/js/21.0289e1ff.js",
    "revision": "f5b4999f6dae5fea7ce45f840de569cb"
  },
  {
    "url": "assets/js/22.0cb3cad4.js",
    "revision": "9ac3d47c6905f3088cfe31e80df9042b"
  },
  {
    "url": "assets/js/23.93a9f648.js",
    "revision": "c2ecfa9194ab0380e935cd1bd4c440f4"
  },
  {
    "url": "assets/js/24.6b59e880.js",
    "revision": "c9b191c7ad2a65709c3874685d65db71"
  },
  {
    "url": "assets/js/25.a1420cb8.js",
    "revision": "871783b42651da581a33ec38df85a265"
  },
  {
    "url": "assets/js/26.24ee00cb.js",
    "revision": "9d6effbd27759dbfc9994b73ea62af21"
  },
  {
    "url": "assets/js/27.e159cc7a.js",
    "revision": "b09af166816f93bd534f80860bff6573"
  },
  {
    "url": "assets/js/28.c0227032.js",
    "revision": "17c2b3bc4a49871a2eea19550aeebcc5"
  },
  {
    "url": "assets/js/29.6b10f7bb.js",
    "revision": "d4f199ef4fdc575a687e4541dcb4b343"
  },
  {
    "url": "assets/js/3.66e7a945.js",
    "revision": "3f22388391af013d99c5afb52930983e"
  },
  {
    "url": "assets/js/30.b34250d3.js",
    "revision": "6857ec4061f33a908e68ed41b9e95be1"
  },
  {
    "url": "assets/js/31.6d4bece4.js",
    "revision": "9c496522a5a725fa83dc02c9a8ca27ec"
  },
  {
    "url": "assets/js/32.c2017fea.js",
    "revision": "a971be832b5e04966498f306782239ec"
  },
  {
    "url": "assets/js/33.b0d80c3a.js",
    "revision": "5a604f375c6c68a11fbd98f2bd98726a"
  },
  {
    "url": "assets/js/34.ca410baf.js",
    "revision": "8d6fafcdc182dee8eab6934425b4c96d"
  },
  {
    "url": "assets/js/35.57efd2cd.js",
    "revision": "1055d96f56fb4ab519cbaaabca514c87"
  },
  {
    "url": "assets/js/36.6c5f9dd8.js",
    "revision": "745874dbc5d4c86169afc654d06ec4c3"
  },
  {
    "url": "assets/js/37.4bb7e1be.js",
    "revision": "8047511af8a78f28d770df640bf763af"
  },
  {
    "url": "assets/js/38.aecd3fa6.js",
    "revision": "2301c2d8a58ad5634a30205a947e7673"
  },
  {
    "url": "assets/js/39.929614a5.js",
    "revision": "8dc1e7726bc844235284cb920e25fb1e"
  },
  {
    "url": "assets/js/4.c73cb736.js",
    "revision": "a8f2ad15a828517327cd9ada7ee2d2fb"
  },
  {
    "url": "assets/js/5.87525807.js",
    "revision": "f9f9b21129e7eaf1e433de0e9418f302"
  },
  {
    "url": "assets/js/6.b452a173.js",
    "revision": "cf08cc8500fd5d6a660a7258789a6cef"
  },
  {
    "url": "assets/js/7.f31e2ca6.js",
    "revision": "a151b8022c852422d68a73a56d09dbcc"
  },
  {
    "url": "assets/js/app.e5f462c9.js",
    "revision": "a0cfb988f6dbbd42830ebc52e0462002"
  },
  {
    "url": "assets/js/vendors~docsearch.5ad4acaa.js",
    "revision": "d7a0926c4e3042b7f047aaf84f7f10db"
  },
  {
    "url": "diary/diary.html",
    "revision": "df7f94706cc5211af6a41cc1f3239b60"
  },
  {
    "url": "diary/diary1.html",
    "revision": "51b877ab910e03cc31076e3fcb46d1d2"
  },
  {
    "url": "icons/icon512_maskable.png",
    "revision": "18cdf00cfde8b3c7aab170dc17dca081"
  },
  {
    "url": "icons/icon512_rounded.png",
    "revision": "1b427f2e4f526e7f70bb2e25bf10c0d0"
  },
  {
    "url": "index.html",
    "revision": "53ba06048c59db950f47b37fd5015c06"
  },
  {
    "url": "index1.html",
    "revision": "a60ca720e212f71e6f3cbb34371c24f8"
  },
  {
    "url": "index2.html",
    "revision": "ce5c27c141070c92a5d22f7ca73b69c0"
  },
  {
    "url": "introduce/about.html",
    "revision": "b9a5c6876c163ec269efe3c43cab9ffd"
  },
  {
    "url": "introduce/index.html",
    "revision": "5d589ed48aae0cc3968773e4e0b9a8b0"
  },
  {
    "url": "introduce/test.html",
    "revision": "c64c10a507131dc1e7b7c542653d209d"
  },
  {
    "url": "studynote/note1.html",
    "revision": "838d7f56655dbffd9197c6946b5fba49"
  },
  {
    "url": "studynote/note2.html",
    "revision": "bacf1c6a45c1e8493addc4567780638b"
  },
  {
    "url": "studynote/note3.html",
    "revision": "8706fa0f8bee6b251ca43e736f660823"
  },
  {
    "url": "studynote/note4.html",
    "revision": "c325f9492d7b1be6c5e9e1743331e905"
  },
  {
    "url": "studynote/note5.html",
    "revision": "e39666d072e6478a3e8999cf621cad8b"
  },
  {
    "url": "studynote/note6.html",
    "revision": "6f37f3d91d4cb2e92fd9038c2a88417a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
