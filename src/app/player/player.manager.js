import {Subject} from 'rxjs/Subject';
import {PlayerService} from './player.service.js';

export class PlayerManager {
    constructor() {
        this.innerThread = new Subject();
        this.outerThread = new Subject();
        this.playerService = new PlayerService();

        this.innerThread.subscribe((event) => {
            this.playerService.innerThread.next(event);
        });

        this.playerService.outerDirectionThread.subscribe((direction) => {
            this.outerThread.next(direction);
        });
    }
}