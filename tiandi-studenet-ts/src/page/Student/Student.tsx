import React from 'react';
import { inject, observer, } from 'mobx-react'
import {
  Button,
  Space,
  Popconfirm,
  Pagination
} from 'antd';
import './student.css'
import StudentInsertModal from './StudentInsertModal';
import StudentEditModal from './StudentEditModal';
import DataTable from '@component/DataTable/DataTable';
import InsertModalStore from '@store/Student/InsertModalStore';

@inject('rootStore')
@observer
class Student extends React.Component {

  courseNames = ['React', 'JAVA', 'MySQL'];
  store = this.props.rootStore.StudentStore;
  // store = new StudentStore(null);

  componentDidMount() {
    this.store.getStudentScoreList(1, 10);
  }

  render() {
    let insertStore = this.props.rootStore.StudentInsertModalStore;
    let editStore = this.props.rootStore.StudentEditModalStore;
    let loadingStore = this.props.rootStore.LoadingStore;
    // let insertStore = new InsertModalStore(null);

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        isSearchable: true
      },
      {
        title: '课程',
        dataIndex: 'course',
        key: 'course',
        sorter: (a: any, b:any) => a.course.localeCompare(b.course),
        sortDirections: ['ascend', 'descend'],
        filters: this.courseNames.map( (name: string ) => {
          return {text: name, value: name};
        }),
        onFilter: (value: string, record: any) => record.course.indexOf(value) === 0,
      },
      {
        title: '成绩',
        dataIndex: 'score',
        key: 'score',
        sorter: (a: any, b:any) => a.score - b.score,
        sortDirections: ['ascend', 'descend'],
      },
      {
        title: '修改时间',
        dataIndex: 'updateTime',
        key: 'updateTime',
        sorter: (a: any, b:any) => new Date(a.updateTime).getTime() - new Date(b.updateTime).getTime(),
        sortDirections: ['ascend', 'descend'],
      },
      {
        title: '操作',
        key: 'action',
        render: (text: string, record: any) => {
          return (
            <Space>
              <Button onClick={() => {
                Object.keys(record).forEach(key => {
                  editStore.data.set(key, record[key]);
                });
                editStore.setModalStatus(true);
              }} > 编辑
              </Button>
              <Popconfirm
                title={`确认要删除${record.name}的${record.course}成绩吗?`}
                onConfirm={() => this.store.deleteRecord(record)}
                okText="Yes"
                cancelText="No"
              >
              <Button danger> 删除 </Button>
              </Popconfirm>
            </Space>
          ) 
        }
      },
    ];

    return (
      <div>
        <Button className="rightBtn" onClick={() =>{
          insertStore.setModalStatus(true)
        } } type="primary">录入学生成绩</Button>
          
        <DataTable rowKey='id' data={this.store.studentScoreList} columns={columns}
            loading={loadingStore.isLoading}
            handleSearch={(name: string, dataIndex: string) => this.store.getStudentScoreList(1, this.store.pageSize, name)} 
            handleReset={ () => this.store.getStudentScoreList(1, this.store.pageSize, null)}
        />

        <Pagination className="rightPagination"
          total={this.store.totalCount}
          // total={13}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          defaultPageSize={10}
          current={this.store.currentPage}
          showSizeChanger
          pageSizeOptions={['5','10','20','50']}
          onChange={(page, pageSize) => this.store.getStudentScoreList(page, pageSize)}
        />

        <StudentInsertModal store={insertStore} courseNames={this.courseNames} />
        <StudentEditModal store={editStore} courseNames={this.courseNames} />

      </div>
    )
  }
}

export default Student;
