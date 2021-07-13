import React from 'react'
import { observer } from 'mobx-react'
import {
  Form,
  Input,
  Select,
  Modal
} from 'antd';
import './student.css'
const { Option } = Select;

@observer
class StudentInsertModal extends React.Component {

  componentDidUpdate() {
    !!this.props.store.data.get('course') || this.props.store.data.set('course', "React")
  }

  render() {
    let store = this.props.store;
    // let store = new StudentStore(null);

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };

    return (
        <Modal
          title="新增学生成绩"
          visible={!!store.modalIsOpen}
          onOk={() => store.insertNewRecord()}
          onCancel={() => store.setModalStatus(false)}
          destroyOnClose
        >
          <Form {...formItemLayout}>
            <Form.Item label="学生姓名" 
              validateStatus={store.isKeyValid('name') ? "success" : "error" }
              required
            >
              <Input placeholder="学生姓名"
               value={store.data.get('name')}
               onBlur={() => store.onBlur('name')}
               onChange={(e) => store.data.set('name', e.target.value)} />
            </Form.Item>

            <Form.Item label="考试科目"
              validateStatus={store.isKeyValid('course') ? "success" : "error" }
              required
            >
              <Select value={store.data.get('course')}
               style={{ width: 120 }} onChange={(e) => store.data.set('course', e)}>
                 {
                   this.props.courseNames.map((name: string) => 
                     <Option key={name} value={name}>{name}</Option>
                   )
                 }
              </Select>
            </Form.Item>

            <Form.Item label="考试成绩"
              validateStatus={store.isKeyValid('score') ? "success" : "error" }
              required
            >
              <Input placeholder="考试成绩" type='number' max="100"
               value={store.data.get('score')}
               onBlur={() => store.onBlur('score')}
               onChange={(e) => store.data.set('score', Number(e.target.value) > 100 ? 100: e.target.value)}/>
            </Form.Item>
          </Form>
        </Modal>
    )
  }
}

export default StudentInsertModal;
