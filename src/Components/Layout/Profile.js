import React, { useState ,useEffect} from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
  import {useSelector , useDispatch} from "react-redux"
import { GET_USER } from '../../Redux/LoginSlicer';
import "./Profile.scss"
const ProfilePage = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch()
  const {UserData} = useSelector(state=>state.login)
  console.log(UserData);
  useEffect(()=>{
    dispatch(GET_USER())
  },[dispatch])
  const onAvatarChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onFinish = (values) => {
    console.log('Received values of form:', values);
    // dispatch(updateProfile(formData)); 
  };

  return (
    <div className="container">
      <div className='profile_Wrapper'>
        <h2>USER : {UserData?.user?.name}</h2>
        <img className="img" src="https://files.oaiusercontent.com/file-MOCLAKu8eUng3JbpToGuPDUZ?se=2023-12-14T07%3A34%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Deb9b062b-4b7b-4743-9ed8-e812f382ee41.webp&sig=F%2Bk4OV/5L8ykb1wTk9YAQBrB6BajXzMNZCFS6/B40Vs%3D" alt="" />
        <h3>EMAIL : {UserData?.user?.email}</h3>
  <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          email: '', 
          password: ''
        }}
      >
  
        <Form.Item
          name="avatar"
          valuePropName="fileList"
          getValueFromEvent={onAvatarChange}
        >
          <Upload
            name="avatar"
            listType="picture"
            beforeUpload={() => false} 
            onChange={onAvatarChange}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
    
  );
};

export default ProfilePage;