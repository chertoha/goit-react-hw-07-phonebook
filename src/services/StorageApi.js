export class LocalStorageApi {
  constructor(key) {
    this.key = key;
  }

  //return full object from local storage
  get() {
    const result = localStorage.getItem(this.key);
    return result ? JSON.parse(result) : false;
  }

  //update full object in local storage
  update(object) {
    localStorage.setItem(this.key, JSON.stringify(object));
  }
}
