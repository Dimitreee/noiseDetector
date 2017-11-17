import {Subject} from 'rxjs';

export class StateService {
    constructor(stateSignature) {
        this.state = stateSignature;

        this.stateThread = new Subject();
        this.directionThread = new Subject();

        this.stateThread.subscribe((prop) => {
            this.state = Object.assign({}, this.state, prop);
            this.directionThread.next(this.state);
        });
    }
}