// Service Worker pour ReadNote PWA
const CACHE_NAME = 'readnote-v2.0.0';
const urlsToCache = [
  './readnote.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installation en cours...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Mise en cache des ressources');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] Installation terminée');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[Service Worker] Erreur lors de la mise en cache:', error);
      })
  );
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activation en cours...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Activation terminée');
      return self.clients.claim();
    })
  );
});

// Stratégie de cache : Cache First, fallback to Network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si la ressource est en cache, la retourner
        if (response) {
          console.log('[Service Worker] Ressource trouvée en cache:', event.request.url);
          return response;
        }
        
        // Sinon, faire une requête réseau
        console.log('[Service Worker] Récupération depuis le réseau:', event.request.url);
        return fetch(event.request).then((response) => {
          // Vérifier si la réponse est valide
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Cloner la réponse
          const responseToCache = response.clone();
          
          // Mettre en cache pour les futures requêtes
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        }).catch((error) => {
          console.error('[Service Worker] Erreur réseau:', error);
          
          // Si c'est une requête HTML, retourner une page offline personnalisée
          if (event.request.headers.get('accept').includes('text/html')) {
            return new Response(
              `<!DOCTYPE html>
              <html lang="fr">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>ReadNote - Offline</title>
                <style>
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background: #FFFFFF;
                    color: #000000;
                    text-align: center;
                    padding: 20px;
                  }
                  h1 { font-size: 48px; margin-bottom: 20px; }
                  p { font-size: 18px; color: #666666; margin-bottom: 30px; }
                  button {
                    background: #000000;
                    color: #FFFFFF;
                    border: none;
                    padding: 15px 30px;
                    font-size: 16px;
                    cursor: pointer;
                  }
                  button:hover { opacity: 0.8; }
                </style>
              </head>
              <body>
                <h1>📡 Mode Offline</h1>
                <p>Vous êtes actuellement hors ligne.<br>ReadNote fonctionne en mode offline, mais certaines fonctionnalités peuvent être limitées.</p>
                <button onclick="location.reload()">🔄 Réessayer</button>
              </body>
              </html>`,
              {
                headers: { 'Content-Type': 'text/html' }
              }
            );
          }
        });
      })
  );
});

// Écouter les messages du client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});