// let validCache ='bookiercache-v1';
//
// self.addEventListener('activate', function (event) {
//     event.waitUntil(
//         caches.keys().then(function (cacheNames) {
//             return Promise.all(
//                 cacheNames.filter(function (cacheName) {
//                     return validCache !== cacheName
//                 }).map(function (cacheName) {
//                     return caches.delete(cacheName);
//                 })
//             );
//         })
//     );
// });
//
// self.addEventListener('install', function(event) {
//     self.skipWaiting();
//
//     event.waitUntil(
//         caches.open('bookiercache-v1').then((cache) => {
//             return cache.addAll([
//                 'lib/angular/angular.js',
//                 'lib/angular/angular-ui-router.js',
//                 'lib/angular/angular-cookies.js',
//                 'assets/js/app.js',
//                 'assets/js/controllers.js',
//                 'assets/css/style.css',
//                 'assets/css/app.css',
//                 'assets/css/MuktaMahee-Regular.ttf',
//                 'index.html',
//                 'templates/login.html',
//                 'templates/register.html',
//                 'templates/saytheword.html',
//                 'templates/tracks.html',
//                 'templates/dashboard.html',
//                 'templates/newguys.html',
//                 'sw.js',
//                 'assets/uploads/9mobile.png',
//                 'assets/uploads/arik-logo.png',
//                 'assets/uploads/bookier.png',
//                 'assets/uploads/dstv-logo.png',
//                 'assets/uploads/glo-logo.gif',
//                 'assets/uploads/mtn.png',
//                 'assets/uploads/onboarding.jpg',
//                 'assets/uploads/challenges/allergies.jpeg',
//                 'assets/uploads/challenges/difference-of-squares.jpeg',
//                 'assets/uploads/challenges/grade-school.jpg',
//                 'assets/uploads/challenges/matrix.jpeg',
//                 'assets/uploads/challenges/secret-handshake.jpeg',
//                 'assets/uploads/challenges/simple-cipher.jpeg',
//                 'assets/uploads/challenges/space-age.jpeg',
//                 'assets/uploads/challenges/wordy.jpeg',
//                 'main.html'
//
//             ])
//         }).catch((error) => {
//             return error.measure
//         }));
// });
//
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.open('bookiercache-v1').then(function(cache) {
//             return cache.match(event.request).then(function (response) {
//                 return response || fetch(event.request).then(function(response) {
//                     cache.put(event.request, response.clone());
//                     return response;
//                 });
//             });
//         })
//     );
// });