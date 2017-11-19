import {Subject} from 'rxjs/Subject';
import {RenderService} from './render.service';

export class RenderManager {
    constructor() {
        this.playerCordsThread = new Subject();
        this.renderService = new RenderService();

        this.playerCordsThread.subscribe((cords) => {
            this.renderService.cordsThread.next(cords)
        })
    }
}