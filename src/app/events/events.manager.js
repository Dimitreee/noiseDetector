import {Subject} from 'rx-js/Subject';

let Rx = require('rx-dom/index');

import {EventsService} from './events.service';

export class EventsManager {
    constructor() {
        this.innerEventsThread = Rx.DOM.keydown(window).filter(keyCodeFilter);
        this.outerEventsThread = new Subject();
        this.eventsService = new EventsService(this.innerEventsThread);
        this.eventsService.thread.subscribe((event) => {
            this.outerEventsThread.next(event)
        })
    }
}

function keyCodeFilter(event) {
    return event.keyCode === 32
        || event.keyCode === 37
        || event.keyCode === 38
        || event.keyCode === 39
        || event.keyCode === 40
        || event.keyCode === 65
        || event.keyCode === 68
        || event.keyCode === 83
        || event.keyCode === 87;
}
