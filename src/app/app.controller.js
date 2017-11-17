import {EventsManager} from './events/events.manager.js'

export class AppController {
    constructor() {
        this.eventsManager = new EventsManager();
    }
}