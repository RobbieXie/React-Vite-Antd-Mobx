import React from 'react'
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { inject, observer } from 'mobx-react';

@inject('rootStore')
@observer
class DataTable extends React.Component {

  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),

    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  
    // onFilter: (value, record) => this.handleFilter(value, record),

    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },

    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
    this.props.handleSearch(selectedKeys[0], dataIndex);
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
    this.props.handleReset();
  };

  render() {
    const columns = this.props.columns.map(element => {
          if (element.isSearchable) {
              element = {...element, ...this.getColumnSearchProps(element.dataIndex)}
          }
          return element;
      });

    return <Table rowKey={this.props.rowKey} columns={columns}
               dataSource={this.props.data}  pagination={false}
               loading={this.props.loading}
           />;
  }
}

export default DataTable;