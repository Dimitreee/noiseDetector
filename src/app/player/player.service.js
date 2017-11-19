import {Subject} from 'rxjs/Subject';
import {Player} from './player.js';

export class PlayerService {
    constructor() {
        this.player = new Player();
        this.innerThread = new Subject();
        this.outerDirectionThread = new Subject();

        this.player.moveThread.subscribe((cords) => {
            this.outerDirectionThread.next(cords);
        });

        this.innerThread.subscribe((event) => {
            if (event.getName() === 'Date') {
                this.player.endMoveThread.next(event);
            } else {
                this.player.nextMoveThread.next(event);
            }
        })
    }
}