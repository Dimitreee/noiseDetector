import {Canvas} from './canvas';

export class RenderService {
    constructor() {
        this.canvas = new Canvas();
        this.renderFrame();
    }

    renderFrame(time) {
        console.log('renderFrame');
        requestAnimationFrame((timesTamp) => {
            setTimeout(() => {
                this.renderFrame(timesTamp);
            }, 0);
        });
    }
}
