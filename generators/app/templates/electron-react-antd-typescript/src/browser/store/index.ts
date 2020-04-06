import { observable, autorun, action, computed, toJS, transaction, runInAction, configure } from 'mobx';

configure({
  enforceActions: true
});

class Store {
  @observable name = -100

  constructor() {
  }

  @action
  add(name) {
    this.name = name;
  }
}

export default {
  store: new Store(),
}