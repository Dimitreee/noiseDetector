import {EventsManager} from './events/events.manager.js'
import {StateManager} from './state/state.manager.js';
import {RenderManager} from './renderer/render.manager.js';
import {PlayerManager} from './player/player.manager.js';

let stateSignature = {
    direction: null,
    type: null
};

export class AppController {
    constructor() {
        this.eventsManager = new EventsManager();
        this.stateManager = new StateManager(stateSignature);
        this.renderManager = new RenderManager();
        this.playerManager = new PlayerManager();

        this.eventsManager.outerEventsThread.subscribe((event) => {
            if (event.getName() === 'Date') {
                this.playerManager.innerThread.next(event);
            } else {
                this.stateManager.innerThread.next(event);
            }
        });

        this.stateManager.outerDirectionThread.subscribe((state) => {
            this.playerManager.innerThread.next(state);
        });

        this.playerManager.outerThread.subscribe((event) => {
            this.renderManager.playerCordsThread.next(event);
        })
    }
}