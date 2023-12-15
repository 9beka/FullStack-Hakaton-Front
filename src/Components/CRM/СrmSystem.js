import React, { useEffect } from "react";
import { Table } from "antd";
import { ProductTable } from "./TablesCrud";
import { useDispatch, useSelector } from "react-redux";
import { GET_FAKESHOP, GET_DETAILS_SHOP } from "../../Redux/CrmSlicer";
import { useNavigate } from "react-router-dom";
import { GET_USER } from "../../Redux/LoginSlicer";
const СrmSystem = () => {
  const { fakeData } = useSelector((state) => state.crm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(GET_FAKESHOP());
    dispatch(GET_USER())
  }, [dispatch]);

  const handleClick = (record) => {
    dispatch(GET_DETAILS_SHOP(record.id));
    navigate(`/details/${record.id}`);
  };
  return (
    <div>
      <Table
        dataSource={fakeData}
        columns={ProductTable}
        rowKey="id"
        //loading={loading}

        scroll={{ y: 450 }}
        onRow={(record) => ({
          onDoubleClick: () => handleClick(record),
        })}
      />
    </div>
  );
};

export default СrmSystem;
