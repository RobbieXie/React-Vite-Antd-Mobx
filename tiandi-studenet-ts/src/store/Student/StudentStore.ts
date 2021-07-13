import {makeObservable, observable , action, runInAction} from 'mobx'
import RootStore from '@store/RootStore';
import { deleteById, getPageScores, getPageScoresWithName } from '@api/StudentController';
import { openNotificationWithIcon } from '@component/notification/notification'

export default class StudentStore {
    rootStore : typeof RootStore;
    constructor(rootStore: any) {
        this.rootStore = rootStore;
        makeObservable(this)
    }

    @observable
    currentPage = 1;
    @observable
    pageSize = 10;
    @observable
    totalCount = 0;

    @action.bound
    setCurrentPage(page: number) {
        this.currentPage = page;
    }
    @action.bound
    setPageSize(size: number) {
        this.pageSize = size;
    }
    @action.bound
    setTotalCount(totalCount: number) {
        this.totalCount = totalCount;
    }

    @observable
    studentScoreList = [];

    @action.bound
    async setStudentScoreList(data: any) {
        this.studentScoreList = data;
    }

    @action.bound
    async getStudentScoreList(page: number, size: number, name: string | null) {
        this.rootStore.LoadingStore.start();
        this.setCurrentPage(page);
        this.setPageSize(size);

        let response = await getPageScoresWithName(page, size, name);
        runInAction(() => {
            let { data } = response;
            if (data.code == '1000') {
                this.setStudentScoreList(data.data);
                this.setTotalCount(data.totalCount);
            } else {
                openNotificationWithIcon('success', `获取数据失败${data.message}`, '')
            }
            this.rootStore.LoadingStore.stop();
        })
    }

    @action.bound
    async deleteRecord(studentScore: any) {
        let response = await deleteById(studentScore.id);
        openNotificationWithIcon('success', `删除成功, 姓名:${studentScore.name},课程:${studentScore.course},成绩:${studentScore.score}`, '')
        this.getStudentScoreList(this.currentPage, this.pageSize, null);
    }
}
