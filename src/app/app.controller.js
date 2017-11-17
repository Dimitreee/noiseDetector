import {EventsManager} from './events/events.manager.js'
import {StateManager} from './state/state.manager.js';
import {RenderManager} from './renderer/render.manager';

let stateSignature = {
    direction: null,
    type: null
};

export class AppController {
    constructor() {
        this.eventsManager = new EventsManager();
        this.stateManager = new StateManager(stateSignature);
        this.renderManager = new RenderManager();

        this.eventsManager.outerEventsThread.subscribe((event) => {
            this.stateManager.innerThread.next(event);
        });

        this.stateManager.outerThread.subscribe((state) => {
            console.log(state);
        });
    }
}