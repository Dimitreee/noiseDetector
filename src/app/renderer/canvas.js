export class Canvas {
    constructor() {
        this.canvas = Canvas.initCanvas();
        this.context = this.canvas.getContext('2d');
    }

    set globalAlpha(alpha) {
        if (cooperationType(alpha)) {
            this.context.globalAlpha = alpha;
        }
    }

    set compositeCooperation(type) {
        this.context.globalCompositeOperation = type;
    }

    set strokeStyle(color) {
        this.context.strokeStyle = color;
    }

    set fillStyle(color) {
        this.context.fillStyle = color;
    }

    set lineWidth(width) {
        this.context.lineWidth = width;
    }

    set lineCap(capType) {
        this.context.lineCap = capType;
    }

    set lineJoin(joinType) {
        this.context.lineJoin = joinType;
    }

    set miterLimit(limit) {
        this.context.miterLimit = limit;
    }

    static initCanvas() {
        let canvas = document.createElement('canvas');
        let canvasContainer = document.querySelector('.canvas__container');
        let w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        canvasContainer.appendChild(canvas);

        canvas.style.width = `${x}px`;
        canvas.style.height = `${y}px`;
        return canvas;
    }

    clearRect(x, y, width, height) {
        this.context.clearRect(x, y, width, height);
    }

    fillRect(x, y, width, height) {
        this.context.fillRect(x, y, width, height);
    }

    strokeRect(x, y, width, height) {
        this.context.strokeRect(x, y, width, height);
    }

    drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
        this.context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }

    saveState() {
        this.context.save();
    }

    restireState() {
        this.context.restore();
    }

    scale(scaleX, scaleY) {
        this.context.scale(scaleX, scaleY);
    }

    rotate(angle) {
        this.context.rotate(angle);
    }

    translate(translateX, translateY) {
        this.context.translate(translateX, translateY);
    }

    transform(hScaling, hSkewing, vSkewing, vScaling, hMoving, vMoving) {
        this.context.transform(hScaling, hSkewing, vSkewing, vScaling, hMoving, vMoving);
    }

    createPattern(pattern, type) {
        this.context.createPattern(pattern, type)
    }
}

let cooperationType = (type) => {
    return type === 'source-over'
        || type === 'source-in'
        || type === 'source-out'
        || type === 'source-atop'
        || type === 'destination-over'
        || type === 'destination-in'
        || type === 'destination-out'
        || type === 'destination-atop'
        || type === 'lighter'
        || type === 'copy'
        || type === 'xor'
        || type === 'multiply'
        || type === 'screen'
        || type === 'overlay'
        || type === 'darken'
        || type === 'lighten'
        || type === 'color-dodge'
        || type === 'color-burn'
        || type === 'hard-light'
        || type === 'soft-light'
        || type === 'difference'
        || type === 'exclusion'
        || type === 'hue'
        || type === 'saturation'
        || type === 'color'
        || type === 'luminosity';
};