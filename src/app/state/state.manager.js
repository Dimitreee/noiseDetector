import {StateService} from './state.service';
import {Subject} from 'rxjs';

export class StateManager {
    constructor(stateSignature) {
        this.innerThread = new Subject();
        this.outerThread = new Subject();

        this.state = new StateService(stateSignature);

        this.innerThread.subscribe((prop) => {
            this.state.stateThread.next(prop);
        });

        this.state.directionThread.subscribe((state) => {
            this.outerThread.next(state);
        })
    }
}