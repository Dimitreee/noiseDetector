import {Subject} from 'rxjs/Subject';

export class EventsService {
    constructor(actors, actorsQueueEnd) {
        this.queueEnd = new Subject();

        this.queueParams = {
            fadingStart: null
        };

        this.tap = 2;

        actors.subscribe((event) => {
            this.keyListener(event)
        });

        actorsQueueEnd.subscribe(() => {
            this.setEndTime();
            this.queueEnd.next(this.queueParams.fadingStart);

            setTimeout(() => {
                this.fadingStart = null;
            }, 2000)
        });

        this.outerThread = new Subject();
    }

    keyListener(event) {
        let EventObject = new Event();

        EventObject.keyCode = event.keyCode;

        this.outerThread.next(EventObject);
    }

    setEndTime() {
        this.queueParams.fadingStart = new Date();
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