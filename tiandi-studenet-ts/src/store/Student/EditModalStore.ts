import {makeObservable} from 'mobx'
import StudentModalStore from "./StudentModalStore";
import RootStore from '../RootStore';
import { openNotificationWithIcon } from '@component/notification/notification'
import {update} from '@api/StudentController'


class EditModalStore extends StudentModalStore {
    rootStore : typeof RootStore;
    constructor(rootStore: any) {
        super(rootStore);
        this.rootStore = rootStore;
        makeObservable(this)
    }

    async saveRecord() {
        let id = this.data.get('id');
        let name = this.data.get('name');
        let course = this.data.get('course');
        let score = this.data.get('score');
        if (!name || !course || !score) {
            openNotificationWithIcon('error', '请传入正确的参数', '')
            return;
        }

        let studentScore = {}
        this.data.toJSON().forEach((arr) => {
            studentScore[arr[0]] = arr[1]
        })
        let response = await update(id, studentScore);
        let {data} = response;
        if(data.code == '1000') {
            openNotificationWithIcon('success', `姓名:${name},课程:${course},成绩:${score}`, '')
            this.setModalStatus(false);
            this.rootStore.StudentStore.getStudentScoreList()
        } else {
            openNotificationWithIcon('error', `更新失败, ${data.message}`, '')
        }
    }
}

export default EditModalStore;