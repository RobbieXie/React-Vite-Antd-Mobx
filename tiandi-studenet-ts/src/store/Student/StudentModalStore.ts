import {observable , action} from 'mobx'

export default class StudentModalStore {

    /*
    {
        name: xietiandi,
        couse: React,
        score: 100
    }
    */
    // 数据相关
    @observable
    data = observable.map({})
    @action.bound
    setData (key: string, value: any) {
        this.data.set(key, value);
    }

    // modal框显示状态
    @observable 
    modalIsOpen = false;

    @action.bound
    setModalStatus (status: boolean) {
        this.modalIsOpen = status;
        status || this.data.clear();
    }

    @action.bound
    onBlur(key: string) {
        if (!this.data.has(key)) {
            this.data.set(key, '');
        }
    }
    
    isKeyValid(key: string) {
        return !this.data.has(key) || this.data.get(key); 
    }

}
