import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import './style.css'

Alpine.plugin(collapse)

Alpine.data('app', () => ({
    // Add any Alpine.js data or methods here
}))

Alpine.start()