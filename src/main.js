import './style.css';
import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';
import focus from '@alpinejs/focus';

// Initialisation des plugins Alpine.js
Alpine.plugin(persist);
Alpine.plugin(focus);

// Store pour le mode sombre
Alpine.store('darkMode', {
    on: Alpine.$persist(false).as('darkMode'),  
    toggle() {
        this.on = !this.on;
        document.documentElement.classList.toggle('dark', this.on);
    }
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
    });
  }

// Données pour le consentement aux cookies
Alpine.data('cookieConsent', () => ({
    consent: Alpine.$persist(false).as('cookieConsent'),
    acceptCookies() {
        this.consent = true;
        // Ici, vous pouvez ajouter la logique pour activer les cookies
    },
    refuseCookies() {
        this.consent = true;
        // Ici, vous pouvez ajouter la logique pour désactiver les cookies
    }
}));

// Données pour les articles
Alpine.data('articlesList', () => ({
    articles: [
        {
            id: 1,
            title: 'Premier article',
            excerpt: 'Description courte du premier article...',
            image: '/placeholder1.jpg',
            imageAlt: 'Description de l\'image du premier article'
        },
        {
            id: 2,
            title: 'Deuxième article',
            excerpt: 'Description courte du deuxième article...',
            image: '/placeholder2.jpg',
            imageAlt: 'Description de l\'image du deuxième article'
        },
        {
            id: 3,
            title: 'Troisième article',
            excerpt: 'Description courte du troisième article...',
            image: '/placeholder3.jpg',
            imageAlt: 'Description de l\'image du troisième article'
        }
    ]
}));

window.Alpine = Alpine;
Alpine.start();