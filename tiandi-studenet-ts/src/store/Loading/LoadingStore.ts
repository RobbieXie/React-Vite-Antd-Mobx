import { makeObservable ,observable, action } from "mobx";
import RootStore from "../RootStore";

class LoadingStore {
    rootStore : typeof RootStore;
    constructor(rootStore: any) {
        this.rootStore = rootStore;
        makeObservable(this)
    }

    @observable isLoading = false;

    @action.bound
    start() {
        this.isLoading = true;
    }

    @action.bound
    stop() {
        this.isLoading = false;
    }
}

export default LoadingStore;