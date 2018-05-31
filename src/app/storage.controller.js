export class StorageController {
  constructor () {
    this.storage = window.localStorage;
    this.storageKey = "RMS_DATA";
    this.RMSData = this.getData();
    this.tableBody = document.querySelector("tbody");
    this.renderTableData()
  }

  saveData(RMSValue) {
    const prevData = this.storage.getItem(this.storageKey);
    const data = {date: +(new Date()), value: RMSValue};

    if (prevData === null) {
      this.storage.setItem(this.storageKey, JSON.stringify([data]))
    } else {
      let parsedData = JSON.parse(prevData);
      parsedData.push(data);
      this.storage.setItem(this.storageKey, JSON.stringify(parsedData))
    }

    this.RMSData = this.getData();
    this.renderTableData()
  }

  getData() {
    const data = this.storage.getItem(this.storageKey);
    if (data === null) {
      return []
    }

    return JSON.parse(data)
  }

  clearData() {
    localStorage.removeItem(this.storageKey);
    this.RMSData = this.getData();
    this.renderTableData();
  }

  renderTableData() {
    const clearButton = document.querySelector('.clear');

    if (this.RMSData.length) {
      clearButton.classList.add("visible")
    } else {
      clearButton.classList.remove("visible")
    }

    const data = this.RMSData.map(({date, value}) => {
      const parsedDate = new Date(date);
      const month = parsedDate.getMonth() + 1;
      const day = parsedDate.getDate();
      const hours = parsedDate.getHours();
      const minutes = parsedDate.getMinutes();

      return `<tr><td>${month}.${day} - ${hours}:${minutes}</td><td>${value.toFixed(2)}</td></tr>`
    }).join("");

    this.tableBody.innerHTML = data;
  }
}