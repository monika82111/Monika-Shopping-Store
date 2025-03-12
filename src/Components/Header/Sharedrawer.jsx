import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Drawer, InputNumber } from "antd";
import { Table } from "antd";
import { createStyles } from "antd-style";
import { Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

// const dataSource = [
//   {
//     key: "1",
//     name: "Olivia",
//     age: 32,
//     quantity: 6,
//     address: "New York Park",
//     total: 33,
//   },
//   {
//     key: "2",
//     name: "Ethan",
//     age: 40,
//     address: "London Park",
//     quantity: 5,
//     total: 21,
//   },
// ];
const Sharedrawer = () => {
  const { styles } = useStyle();
  const [open, setOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  // const [loading , setLoading] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    fetchCartData();
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };
 const buttonstyle = {
   marginTop: "15px"
 };

  const fetchCartData = async () => {
    // setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/carts/1");
      if (!response.ok) throw new Error("failed to fetch cart data");
      const data = await response.json();
      setCartTotal(data.total);
      const formattedData = data.products.map((item) => ({
        key: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        total: item.total,
      }));
      setCartData(formattedData);
    } catch (error) {
      message.error("error fetching cart data!");
      console.error("fetch error", error);
    } finally {
      // setLoading(false);
    }
  };
  const onQuantityChange = (newValue, record) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.key === record.key ? { ...item, quantity: newValue } : item
      )
    );
  };
  const columns = [
    {
      title: "Title",
      width: 100,
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      key: "price",
      width: 100,
      render: (price) => `$${price}`,
    },
    {
      title: "Quantity",
      width: 100,
      dataIndex: "quantity",
      key: "quantity",
      render: (value, record) => (
        <InputNumber
          min={1}
          max={10}
          defaultValue={value}
          onChange={(newValue) => onQuantityChange(newValue, record)}
          changeOnWheel
        />
      ),
    },
    {
      title: "Total ($)",
      width: 100,
      dataIndex: "total",
      key: "total",
      render: (total) => `$${total}`,
    },
  ];

  return (
    <>
      <Button onClick={showDrawer}>
        <ShoppingCartOutlined />
      </Button>
      <Drawer title="Your Cart" onClose={onClose} open={open} width={500}>
        <Table
          bordered
          className={styles.customTable}
          columns={columns}
          dataSource={cartData}
          scroll={{
            x: "max-content",
          }}
          pagination={false}
        />
        <Typography>
          Total: <br /> ${cartTotal}
        </Typography>
        <Button type="primary" onClick={showChildrenDrawer}>
          Checkout your Cart
        </Button>
        <Drawer
          title="Confirm Order"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
               labelAlign="left" // Aligns text inside the form
            style={{
              maxWidth: 600,
                
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your full Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox disabled>Cash On Delivery</Checkbox>
            </Form.Item>
             <Typography>More Methods Coming Soon </Typography>
            <Form.Item >
              <Button type="primary" htmlType="submit" style={buttonstyle}>
                Confirm Order
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </Drawer>
    </>
  );
};

export default Sharedrawer;
