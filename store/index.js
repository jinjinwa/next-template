import _test from "./test";
import _counter from "./counter";

let store = null;
class RootStore {
  constructor() {
    this._test = _test;
    this._counter = _counter;
  }
}

export function initializeStore(isServer) {
  if (isServer) {
    return new RootStore(isServer);
  } else {
    if (store === null) {
      store = new RootStore(isServer);
    }
    return store;
  }
}
