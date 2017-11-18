import {AppController} from './app/app.controller';
import {raw} from './utils/raw';

document.addEventListener("DOMContentLoaded", () => {
    raw(window, 'requestAnimationFrame', 'cancelAnimationFrame');
    new AppController();
});