import {Canvas} from './canvas';

export class RenderService {
    constructor() {
        this.canvas = new Canvas();
    }

    renderFrame() {
        requestAnimationFrame(() => {
            setTimeout(() => {
              this.renderFrame();
            }, 0);
        });
    }
}