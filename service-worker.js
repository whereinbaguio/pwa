const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

const PRECACHE_URLS = [
  	'/',
	'/index.html',
	'/scripts/script.js',
	'/scripts/loadcontent.js',
	'/style/fonts/ananda.ttf',
	'/style/fonts/roboto.ttf',
	'/style/imgs/home_banner.png',
	'/style/imgs/go_banner_bg.png',
	'/style/imgs/eat_banner_bg.png',
	'/style/imgs/sleep_banner_bg.png',
	'/style/imgs/logo.png',
	'/style/main.css',
	'/wheretogo.html',
	'/wheretoeat.html',
	'/wheretosleep.html',
	'/aboutus.html',
	'/contact.html',
	'/manifest.json',
	'/service-worker.js',
	'/images/Amare.png',
	'/images/BaguioCathedral.png',
	'/images/BaguioHoliday.png',
	'/images/BaguioMuseum.png',
	'/images/BotanicalGarden.png',
	'/images/BurnhamPark.png',
	'/images/CampJohnHay.png',
	'/images/Chaya.png',
	'/images/Citylight.png',
	'/images/DiplomatHotel.png',
	'/images/Elegant.png',
	'/images/Farmer.png',
	'/images/Fifty.png',
	'/images/ForestLodge.png',
	'/images/GoodTaste.png',
	'/images/Green.png',
	'/images/Grumpy.png',
	'/images/HillStation.png',
	'/images/HotelSupreme.png',
	'/images/HotelVeniz.png',
	'/images/Korean.png',
	'/images/Lemon.png',
	'/images/LionsHead.png',
	'/images/MinesViewPark.png',
	'/images/PhilippineMilitaryAcademy.png',
	'/images/Ridgewood.png',
	'/images/Solibao.png',
	'/images/TheMansion.png',
	'/images/Travelite.png',
	'/images/Villa.png',
	'/images/WrightPark.png'
];

self.addEventListener('install', event => {
  	event.waitUntil(
    	caches.open(PRECACHE)
      		.then(cache => cache.addAll(PRECACHE_URLS))
      		.then(self.skipWaiting())
  	);
});

self.addEventListener('activate', event => {
	const currentCaches = [PRECACHE, RUNTIME];
  	event.waitUntil(
		caches.keys().then(cacheNames => {
		  	return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
		}).then(cachesToDelete => {
		  	return Promise.all(cachesToDelete.map(cacheToDelete => {
				return caches.delete(cacheToDelete);
		  	}));
		}).then(() => self.clients.claim())
  	);
});


self.addEventListener('fetch', event => {
 	if (event.request.url.startsWith(self.location.origin)) {
    	event.respondWith(
			caches.match(event.request).then(cachedResponse => {
			if (cachedResponse) {
				return cachedResponse;
			}

				return caches.open(RUNTIME).then(cache => {
					return fetch(event.request).then(response => {
						return cache.put(event.request, response.clone()).then(() => {
							return response;
						});
					});
				});
			})
    	);
  	}
});