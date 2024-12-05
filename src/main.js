import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import './style.css'

Alpine.plugin(collapse)

Alpine.data('cookieConsent', () => ({
    cookiesAccepted: localStorage.getItem('cookiesAccepted') === 'true',

    acceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true');
        this.cookiesAccepted = true;
    },

    rejectCookies() {
        localStorage.setItem('cookiesAccepted', 'false');
        this.cookiesAccepted = true; 
    }
}))


Alpine.start()
