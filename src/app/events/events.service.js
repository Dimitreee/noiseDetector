import {Subject} from 'rxjs/Subject';

export class EventsService {
    constructor(actors) {
        actors.subscribe((event) => {
                this.keyListener(event)
            }
        );

        this.outerThread = new Subject();
    }

    keyListener(event) {
        let EventObject = new Event();

        EventObject.keyCode = event.keyCode;

        this.outerThread.next(EventObject);
    }
}

class Event {
    constructor() {
        this.type = null;
        this.direction = null;
    }

    set keyCode(code) {
        switch (code) {
            case 32:
            case 38:
            case 87:
                this.type = 'jump';
                this.direction = 'top';
                break;
            case 37:
            case 65:
                this.type = 'move';
                this.direction = 'left';
                break;
            case 40:
            case 83:
                this.type = 'seat';
                this.direction = 'bottom';
                break;
            case 39:
            case 68:
                this.type = 'move';
                this.direction = 'right';
                break;
        }
    }
}