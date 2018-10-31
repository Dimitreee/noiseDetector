import { MicrophoneController } from "./audio.controller"
import { CanvasController } from "./canvas.controller"
import { StorageController } from "./storage.controller";

export class AppController {
    constructor() {
      this.mic = new MicrophoneController();
      this.canvasController = new CanvasController();
      this.storageController = new StorageController(this.mic);

      this.draw = () => {
        this.canvasController.visualizator(this.mic.peak_volume, this.mic.volume);
        requestAnimationFrame(this.draw)
      };

      requestAnimationFrame(this.draw);
      this.addListenerers()
    }

    addListenerers() {
      const saveButton = document.querySelector('.save');

      saveButton.addEventListener("click", () => {
        const RMSValue = this.mic.peak_volume;
        this.storageController.saveData(RMSValue)
      }, false);

      const clearButton = document.querySelector('.clear');

      clearButton.addEventListener("click", () => {
        this.storageController.clearData()
      })
    }
}