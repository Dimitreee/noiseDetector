import {RMSValuesRatio} from "./constants";

export class CanvasController {
  constructor () {
    this.canvasContainer = document.querySelector(".canvas__container");
    this.canvas = document.createElement("canvas");
    this.canvas.width = 800;
    this.ctx = undefined;
    this.initCanvas();
    this.visualizator = this.visualize.bind(this)
  }

  initCanvas() {
    this.canvasContainer.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.canvas.width  = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }

  visualize(pikVolume, volume) {
    this.ctx.font = "18px Arial";
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawScaleBar();

    this.drawVolumeColumn(pikVolume, 100, "MaxAvgVol");
    this.drawVolumeColumn(volume, 400, "CurrAvgVol")
  }


  drawVolumeColumn(volume, xDemension, hintText) {
    const RMS = volume * 2 + 38;
    const yDemension = this.canvas.height - RMS;
    const RGBBarColor = 'rgb(' + (volume) + ', 100, 50)';

    this.ctx.fillStyle = RGBBarColor;
    this.ctx.fillRect(xDemension, yDemension, 50, RMS);
    this.drawColumnMeter(xDemension, yDemension);

    const label = `${hintText}: ${volume.toFixed(2)} RMS`;
    const textX = xDemension;
    const textY = yDemension - 15;
    this.drawText(label, textX, textY)
  }

  drawColumnMeter(x, y) {
    const length = this.canvas.width - x - 400;
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(x, y - 2, length, 2);

    this.ctx.beginPath();
    this.ctx.arc(length + x, y-2, 5, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
  }

  drawScaleBar() {
    this.ctx.fillStyle = "#fff";
    const xOrd = this.canvas.width - 400;
    const barHeight = this.canvas.height - 40;

    // vertical bar
    this.ctx.fillRect(xOrd, 0, 2, this.canvas.height);
    // horizontal bar
    this.ctx.fillRect(0, barHeight, xOrd, 2);

    RMSValuesRatio.forEach((val) => {
      const { avg, label } = val;
      const RMS = avg * 2 + 20;
      const yDemension = this.canvas.height - RMS - 20;
      this.ctx.fillRect(xOrd - 30, yDemension, 60, 2);

      this.drawText(label, xOrd + 40, yDemension + 7)
    });
  }

  drawText(label, x, y) {
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText(label, x, y);
  }
}