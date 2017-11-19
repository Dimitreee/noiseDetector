import {AppController} from './app/app.controller';
import {raw} from './utils/raw';

document.addEventListener("DOMContentLoaded", () => {
    raw(window, 'requestAnimationFrame', 'cancelAnimationFrame');

    Object.prototype.getName = function () {
        let funcNameRegex = /function (.{1,})\(/;
        let results = (funcNameRegex).exec((this).constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    };

    new AppController();
});