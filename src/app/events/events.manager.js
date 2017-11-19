import {Subject} from 'rxjs/Subject';
let Rx = require('rx-dom/index');

import {EventsService} from './events.service';

export class EventsManager {
    constructor() {
        this.actors = Rx.DOM.keydown(window).filter(keyCodeFilter);
        this.actorsQueueEnd = Rx.DOM.keyup(window).filter(keyCodeFilter);

        this.outerEventsThread = new Subject();
        this.eventsService = new EventsService(this.actors, this.actorsQueueEnd);

        this.eventsService.outerThread.subscribe((event) => {
            this.outerEventsThread.next(event);
        });

        this.eventsService.queueEnd.subscribe((endTime) => {
            this.outerEventsThread.next(endTime);
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