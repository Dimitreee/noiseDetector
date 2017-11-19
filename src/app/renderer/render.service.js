import {Subject} from 'rxjs/Subject';
import {Canvas} from './canvas';

export class RenderService {
    constructor() {
        this.canvas = new Canvas();
        this.canvas.fillStyle = '#cecece';
        this.canvas.globalCompositeOperation = 'source-in';

        this.cordsThread = new Subject();
        this.cordsThread.subscribe((cords) => {
            this.player_position = cords;
        });

        // TODO: subscribe from isions tread
        this.player_position = {
            x: 0,
            y: 400,
        };

        this.player = {
            width: 20,
            height: 20
        };

        this.renderFrame();
    }

    renderFrame(time) {
        this.canvas.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.beginPath();
        this.canvas.fillRect(this.player_position.x, this.player_position.y, this.player.width, this.player.height);

        requestAnimationFrame(() => {
            this.renderFrame();
        });
    }
}
