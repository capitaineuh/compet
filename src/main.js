import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import persist from '@alpinejs/persist';
import focus from '@alpinejs/focus';

Alpine.plugin(collapse);
Alpine.plugin(persist);
Alpine.plugin(focus);

Alpine.data('cookieConsent', () => ({
    cookiesAccepted: localStorage.getItem('cookiesAccepted') === 'true',

    acceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true');
        this.cookiesAccepted = true;
    },

    rejectCookies() {
        localStorage.setItem('cookiesAccepted', 'false');
        this.cookiesAccepted = true;
    },
}));


window.Alpine = Alpine;
Alpine.start();