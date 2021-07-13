import EditModalStore from '@store/Student/EditModalStore';
import InsertModalStore from '@store/Student/InsertModalStore';
import StudentStore from '@store/Student/StudentStore'
import LoadingStore from '@store/Loading/LoadingStore';

class RootSotre {
    StudentStore: StudentStore;
    StudentInsertModalStore: InsertModalStore;
    StudentEditModalStore: EditModalStore;
    LoadingStore: LoadingStore;

    constructor() {
        this.StudentStore = new StudentStore(this);
        this.StudentInsertModalStore = new InsertModalStore(this);
        this.StudentEditModalStore = new EditModalStore(this);
        this.LoadingStore = new LoadingStore(this);
    }
}

export default new RootSotre();