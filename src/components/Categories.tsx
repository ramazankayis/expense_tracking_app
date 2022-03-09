import { Table, Tag } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../store/actions/categoryActions';
import { AppState } from '../store';
import { Category } from '../store/types/category';

function Categories() {
  const { data } = useSelector(
    (state: AppState) => state.categories
  );
  console.log(data);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      rende: (text: string, category: Category) => {
        return <Tag color={category.color}>{text.toUpperCase()}</Tag>;
      },
    },

    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return <Table columns={columns} dataSource={data} />;
}

export default Categories;
